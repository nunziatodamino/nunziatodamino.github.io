### A simple example

Let's start with an extremely simple example, by taking the phononic dispersion relation in a linear monoatomic chain. Referring to the first Brillouin zone:

$$\omega(k) = \sqrt{\frac{4\tilde{K}}{M}} | \sin \left( \frac{ka}{2} \right)| \qquad -\frac{\pi}{a}<k\leq\frac{\pi}{a}$$

![[Images/Pasted image 20230216153307.png]]

Moreover, PBC condition gives restriction over the k values:

$$k = \frac{2\pi}{Na}m\qquad m \in \mathbb{Z}$$

Let's choose the specific case in which $N=12$. Note that this implies that our sample is long $l=Na\sim12\ \mathring{\text{A}}$ assuming a lattice constant of 1 $\mathring{\text{A}}$.  

I will have, between $0$ and $\pi/a$ the following possible k values:

$$0,\frac{1}{6}\frac{\pi}{a},\frac{2}{6}\frac{\pi}{a},\frac{3}{6}\frac{\pi}{a},\frac{4}{6}\frac{\pi}{a},\frac{5}{6}\frac{\pi}{a},\frac{\pi}{a}$$

In a more subtle way one can simply put the PBC condition in the Brillouin zone boundary:

$$-\frac{\pi}{a}<\frac{2\pi}{Na}m\leq\frac{\pi}{a} \qquad \Rightarrow \qquad-\frac{N}{2}<m\leq\frac{N}{2}$$

**So that we will have as many k values as there are unit cells.**
I then evaluate, for such allowed values of k, the frequency values and plot them on the graph. 
We will call the pairs $(k, \omega(k))$ vibrational states of the system. 
We now define the vibrational or phononic density of states as the number of vibrational states with frequency between $\omega$ and $\omega+d\omega$. 

$$D(\omega)d\omega = \# \ \mbox{of vibrational states with frequency}\in\ (\omega,\omega+d\omega) $$

In the proposed example, we calculate $D(\omega_0)$ by counting how many vibrational states lie in the (exaggerated) strip to emphasize the concept. In our case $D(\omega_0)d\omega =5$.

### A more general approach

Let's find a smarter way to count the states. 
Let's imagine that we have a huge number of vibrational modes. 
Restricting ourselves again to the 1D problem, we can say that in about 1 $\text{cm}$ of material we should expect $10^7$ vibrational modes: in a linear monoatomic chain we have 1 normal modes per unit cell. Each unit cell is approximately wide as the lattice constant, which is $\sim 10^{-10}$ m, so that in 1 $\text{cm}$ we have $\sim 10^7$ unit cell, for a total of $\sim 10^7$ normal modes. 
This justifies the use of integrals instead of sums.
Considering the periodic boundary conditions, the distance between one $k$ and the next is $2\pi/L$. Therefore, we can count how many vibrational modes there are per unit of k by first defining the vibrational state density per unit k:

$$\tilde{w}(k) = \frac{1}{\frac{2 \pi}{L}} = \frac{L}{2\pi}$$

I.e. 1 mode per Brillouin zone lenght.
So that one obtains the number of states by integration over the set A containing all the k value that returns the same $\omega$:

$$D(\omega)d\omega = \int_A \tilde{w}(k)dk$$

We can use this to evaluate the analytic form of the DOS in 1D.

### Example: 1D monoatomic vibrational DOS

![[Images/Pasted image 20230216155456.png|300]]

By using:

$$D(\omega)d\omega = \int_A \tilde{w}(k)dk$$

We have that the set A is the one in red. So that:

$$D(\omega)d\omega = \int_A \tilde{w}(k)dk =\tilde{w}(k)\int_A dk= \tilde{w}(k)2dk = \frac{L}{\pi}dk$$

Note that we have implicitly used: $\int_A dk = measure(A) = 2dk$
Now, in order to find $D(\omega)$ one must express the the k differential in an $\omega$ differential, using the dispersion relation. One has:

$$\omega(k) = \omega_0 \left| \sin \left( \frac{ka}{2} \right)\right| \iff k(\omega) = \frac{2}{a} \arcsin\left(\frac{\omega}{\omega_0}\right) $$

So that: 

$$D(\omega)d\omega = \frac{L}{\pi}dk = \frac{L}{\pi}\frac{2}{a}\frac{1}{\sqrt{1-\left(\frac{\omega}{\omega_0}\right)^2}}d\omega$$

So that, one can simply deduce:

$$D(\omega) =\frac{2L}{\pi a}\frac{1}{\sqrt{1-\left(\frac{\omega}{\omega_0}\right)^2}}$$
![[Images/Pasted image 20230216161046.png|400]]

## Extension to more dimensions

### 2 dimensions

![[Images/Pasted image 20230216161209.png|300]]

It holds the same formula for the DOS evaluation, there are only few adjustments to make.
First of all we must take account of all the different polarization, i.e. our reasoning will be depending on the branch index $s$
We start by saying that here we call vibrational relative to the $s$ branch state the 3-uple $(k_x,k_y, \omega_s(k_x,k_y))$.
Then the vibrational density of state per unit k changes in :

$$\tilde{w}_s(k) = \frac{S}{(2\pi)^2}$$

This is branch independent.
Where $S$ is the crystal surface. Also we will call the set of k values that gives the same $\omega$,  shell, so that:

$$D_s(\omega)d\omega = \int_{strip} \tilde{w}_s(k)dk_xdk_y =\frac{S}{(2\pi)^2}\int_{strip} dk_xdk_y $$

Also here we can note $\int_{strip} dk_xdk_y = measure(strip)$

### 3 dimensions

Same story here. We begin by calling vibrational state relative to the $s$ branch the 4-uple $(k_x,k_y,k_z, \omega_s(k_x,k_y,k_z))$.
Then we define the vibrational density of state as:

$$\tilde{w}_s(k) = \frac{V}{(2\pi)^3}$$

Where $V$ is the crystal volume. One will have in the end:

$$D_s(\omega)d\omega = \int_{shell} \tilde{w}_s(k)dk_xdk_ydk_z =\frac{V}{(2\pi)^3}\int_{shell} d^3k $$

Also here we can note $\int_{shell} d\bar{k}= measure(shell)$

![[Images/Pasted image 20230216162835.png|400]]
On must note of course that here the shell is a volume composed by 2 surfaces at constant frequency separated by a infinitesimal quantity (like a ''thick'' surface), as seen above.

Let's rewrite the last integral for a more convenient calculation, using images for a better geometric interpretation. 

![[Images/Pasted image 20230216163125.png|400]]

The integration shell is a shell composed of 2 surfaces at constant frequency. Since the difference in frequency is infinitesimal, we can think of the two surfaces as locally parallel. It follows simply that:

$$d^3k = dS_{\omega}dk_{\perp}$$

Furthermore, we know that the vector orthogonal to the surface must necessarily be proportional to the gradient of the surface (defined by the dispersion relation) at that point, by definition of the normal to the surface.
In fact, by differentiating the dispersion relation $\omega(k_x,k_y,k_z)$:

$$d\omega = \frac{\partial\omega}{\partial k_x}dk_x +\frac{\partial\omega}{\partial k_y}dk_y+\frac{\partial\omega}{\partial k_z}dk_z = \nabla_{\bar{k}}\omega_s(\bar{k})\cdot d\bar{k} = $$

$$=\nabla_{\bar{k}}\omega_s(\bar{k})\cdot( d\bar{k}_{//}+d\bar{k}_{\perp})=\nabla_{\bar{k}}\omega_s(\bar{k})\cdot d\bar{k}_{\perp}  $$

Where the $d\bar{k}$ decomposition has been made respect to $dS_{\omega}$.
We can the finally write:

$$d\omega =|\nabla_{\bar{k}}\omega_s(\bar{k})| d\bar{k}_{\perp}  $$

We don't have any angle dipendency for the observation made before on the gradient.
We are now ready to rewrite the DOS integral:

$$D_s(\omega)d\omega =\frac{V}{(2\pi)^3}\int_{shell} d^3k= \frac{V}{(2\pi)^3}\int_{S_{\omega}} dS_{\omega}dk_{\perp} = \frac{V}{(2\pi)^3}\int_{shell} dS_{\omega} \frac{d\omega}{|\nabla_{\bar{k}}\omega_s(\bar{k})| } $$

So that, finally, one obtains a direct expression for the DOS:

$$D_s(\omega)= \frac{V}{(2\pi)^3}\int_{S_{\omega}} dS_{\omega} \frac{1}{|\nabla_{\bar{k}}\omega_s(\bar{k})| } $$


