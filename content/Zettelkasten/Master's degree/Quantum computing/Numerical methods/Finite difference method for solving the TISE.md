The finite difference method is a general method to solve ODE's and PDE's. Due to its characteristics is mostly used in 1d and 2d problems (nothing constrains the model to be used on 3+ dimensions other than computational infeasibility as we will see).

Given an ODE or PDE, say, with its boundary condition, the idea is to discretize the domain and approximate the derivatives with their point-wise approximation.
This transform the problem in a finite-dimensional algebraic problem (linear or nonlinear system, eigenvalue problem, etc) that we know how to solve.
Of course there are a lot of degrees of freedom in this procedure, reason why this is a topic per se.

We show in this note how to tackle specifically the 1D TISE using this method.
For a wavefunction we have the condition $\lim_{x \to \infty} \psi(x)=0$, as the function must be normalized. We choose then a domain $[a,b]$ big enough such that $\psi(a) \sim 0$ and $\psi(b) \sim 0$.
This choice depend on the problem. (Either the problem is a perturbation of an analytical problem of which we know the packet mean and adjust from there, or we simply guess big and adjust from there)
Next we discretize the interval in $N$ parts using the usual:

$$x_i = a + ih, \quad i = 0, 1, \dots N-1, \qquad \mbox{where}\  h = \frac{b-a}{N-1} $$

and evaluate the TISE in its point-wise form (in $\frac{\hbar^2}{2m}$ units):

$$ -\frac{d^2}{dx^2}\psi(x) + V(x)\psi(x) = E \psi(x) \iff - \frac{\psi_{n-1} - 2\psi_{n}+\psi_{n+1} }{h^2} + V_n \psi_n = E\psi_n$$

Where clearly $V_n= V(x_n)$ and $\psi_n= \psi(x_n)$.
Now we write these in matrix form $K\psi + V \psi = E \psi$.
Notice now the following, leading to 2 computationally equivalent way to write the system:
#### $\psi_0$ and $\psi_{N-1}$ are known, there is no need to solve for them
We already know that the $\psi_0$ and $\psi_{N-1}$ are 0 due to the boundary condition, so we can solve for the **internal points** rather than for all the interval.
In this way the total number of unknowns becomes $N-2$.
The unknown vector contains only the internal values:

$$\bar{\psi}=\begin{pmatrix}\psi_1\\\psi_2\\\vdots\\\psi_{N-2}\end{pmatrix}.$$

The kinetic matrix is:

$$K =\frac{1}{h^2}\begin{pmatrix}2 & -1 & 0 & \cdots & 0\\-1 & 2 & -1 & \cdots & 0\\0 & -1 & 2 & \cdots & 0\\\vdots & \vdots & \vdots & \ddots & -1\\0 & 0 & 0 & -1 & 2\end{pmatrix}\in \mathbb{R}^{(N-2)\times(N-2)}.$$

The potential matrix is:

$$V =\begin{pmatrix}V_1 & 0 & 0 & \cdots & 0\\0 & V_2 & 0 & \cdots & 0\\0 & 0 & V_3 & \cdots & 0\\\vdots & \vdots & \vdots & \ddots & 0\\0 & 0 & 0 & 0 & V_{N-2}\end{pmatrix}\in \mathbb{R}^{(N-2)\times(N-2)}.$$
#### $\psi_0$ and $\psi_{N-1}$ are known, yet we include them 
Even if we know the values, we include them to have a more clean form for the matrices.
We now keep the full grid vector  
$$  
\bar{\psi}  
=  
\begin{pmatrix}  
\psi_0\\  
\psi_1\\  
\vdots\\  
\psi_{N-2}\\  
\psi_{N-1}  
\end{pmatrix}  
\in \mathbb{R}^N,  
$$  
with fixed boundary values  

$$  
\psi_0=\psi_{N-1}=0.  
$$  
The kinetic matrix is  
$$  
K =  
\frac{1}{h^2}  
\begin{pmatrix}  
0 & 0 & 0 & 0 & \cdots & 0 & 0\\  
-1 & 2 & -1 & 0 & \cdots & 0 & 0\\  
0 & -1 & 2 & -1 & \cdots & 0 & 0\\  
0 & 0 & -1 & 2 & \cdots & 0 & 0\\  
\vdots & \vdots & \vdots & \vdots & \ddots & -1 & 0\\  
0 & 0 & 0 & 0 & -1 & 2 & -1\\  
0 & 0 & 0 & 0 & \cdots & 0 & 0  
\end{pmatrix}.  
$$  
  
the potential operator is the full diagonal matrix  

$$  
V =  
\operatorname{diag}(V_0,V_1,\ldots,V_{N-2},V_{N-1}),  
\qquad  
V_i=V(x_i).  
$$    
The boundary values are fixed by the Dirichlet conditions,  

$$  
\psi_0=\psi_{N-1}=0,  
$$

so the boundary contributions $V_0\psi_0$ and $V_{N-1}\psi_{N-1}$ vanish on admissible wavefunctions.