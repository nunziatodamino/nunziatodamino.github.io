Consider we want to solve the TDSE in 1D, in the case in which the Hamiltonian is time independent.

The main idea is to start by approximating the propagator: say we have $U(t,t_0) = e^{-i\frac{H}{\hbar}(t-t_0)}$, and we divide the time interval in time steps $t-t_0 = N\Delta t$.
First, is always true that $U(t,t_0) = \prod^N U(\Delta t)$ ? It is only when the Hamiltonian is time independent (see [[Time ordering]]).
Then the idea is how to treat the object:

$$ \ket{\psi(t+\Delta t)} = U(\Delta t)\ket{\psi(t)} = e^{-i\frac{H}{\hbar}\Delta t}\ket{\psi(t)}$$

Now, the Hamiltonian is composed by a kinetic and a potential part, so we can split them using the Baker-Campbell-Hausdorff expansion truncated at the first order.
There are 2 types of splitting that we can make (a little note on the determination of the local error is present) :
#### Lie-Trotter

We split simply :

$$ e^{-i\frac{H}{\hbar}\Delta t}  = e^{-i\frac{T}{\hbar}\Delta t} e^{-i\frac{V}{\hbar}\Delta t} + \mathcal{O}(\Delta t^2) $$

This is fine, but we can do better
#### Strang 

We split like:

$$ e^{-i\frac{H}{\hbar}\Delta t}  = e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}}e^{-i\frac{T}{\hbar}\Delta t} e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}} + \mathcal{O}(\Delta t^3) $$

or equivalently:

$$ e^{-i\frac{H}{\hbar}\Delta t}  = e^{-i\frac{T}{\hbar}\frac{\Delta t}{2}}e^{-i\frac{V}{\hbar}\Delta t} e^{-i\frac{T}{\hbar}\frac{\Delta t}{2}} + \mathcal{O}(\Delta t^3) $$

Choice 1 or 2 depends on whether our initial wavefunction is stored in the position or momentum basis representation respectively.

Now we describe the actual algorithm, that is based on the observation that the kinetic operator is diagonal in momentum space and the potential operator is diagonal in position space.
### The split operator algorithm

Consider the initial wavefunction to be stored in the position representation.
Then the idea is the following: we choose the splitting:

$$ e^{-i\frac{H}{\hbar}\Delta t}  = e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}}e^{-i\frac{T}{\hbar}\Delta t} e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}} + \mathcal{O}(\Delta t^3) $$

We call a propagation in potential **kick** (in this case, half kick) and a propagation in kinetic energy **drift**.

We apply the half kick to the wavefunction. Given that we are in the position basis the potential is a diagonal matrix, so the exponential operator is simply the diagonal matrix where each element is exponentiated.
Now, in order to have the drift to be also a diagonal matrix, we need to change basis, and go in the momentum representation. In order to do this we can simply do a [[Fourier transforms in any dimension|Fourier transform]].
Now that we are in the momentum space we apply the drift propagator.
Finally in order to apply the last half kick we go back to the position basis with an inverse transform and apply the half kick propagator.

So one has for a single time step:

- Start with $\psi(x,t)$
- Apply the half kick $\psi'(x,t) = e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}} \psi(x,t) = U_V(\Delta t)\psi(x,t)$
- Change basis and go in the momentum space $\psi'(p,t) = \mathcal{F}(\psi'(x,t))$
- Apply the drift $\psi''(p,t) = e^{-i\frac{T}{\hbar}{\Delta t}} \psi'(p,t) = U_T(\Delta t)\psi'(p,t)$
- Go back to the position space $\psi'''(x,t) = \mathcal{F}^{-1}(\psi''(p,t))$
- Apply the final half kick : $\psi(x,t + \Delta t) = e^{-i\frac{V}{\hbar}\frac{\Delta t}{2}} \psi'''(x,t) = U_V(\Delta t)\psi'''(x,t)$

In the end one obtains:

$$\psi(x,t + \Delta t) = U_V(\Delta t) \mathcal{F}^{-1}(U_T(\Delta t)\mathcal{F}(U_V(\Delta t)\psi(x,t)))$$

##### Implementation considerations and operation cost

Lets evaluate the operation cost for the total timestep.
The multiplication between a diagonal matrix and a vector is $\mathcal{O}(N)$
For the Fourier transform rather than a generic basis change (matvec mul, so $\mathcal{O}(N^2)$) we can use the FFT, so that $\mathcal{O}(N\ln N)$
So the leading order cost is $\mathcal{O}(N\ln N)$.
Note that asserts to check normalization do not change the leading order (normalization check is $\mathcal{O}(N)$).
Note also that we do not need to worry about reordering the FFT output under the assumption that we choose the unitary normalization.



