
For a free non-relativistic particle we have $E = \frac{p^2}{2m}$. By then considering the formal assignment of operators:

$$ E \to i\hbar \partial_t  \qquad \bar{p} \to -i\hbar \bar \nabla$$

We obtain the Schrodinger equation for a non-relativistic particle.
The idea then is that, if we want to extend this equation to the relativistic case, we follow the same ansatz.
The problem is that the equation generated from $E=\sqrt{c^2 p^{2}+m^2c^4}$ leads to a difficult operator on the RHS.
So Klein (1927) had the idea to consider the square of the energy for a simpler formulation.
Using this ansatz we obtain then in the coordinate representation

$$  
-\hbar^2\partial_t^2\psi  
=\left(-\hbar^2c^2\nabla^2+m^2c^4\right)\psi,  
$$

or

$$  
\left(  
\frac1{c^2}\partial_t^2-\nabla^2  
+\frac{m^2c^2}{\hbar^2}  
\right)\psi=0.  
$$

Defining

$$  
\square=\frac1{c^2}\partial_t^2-\nabla^2,  
$$

the equation is

$$  
\boxed{  
\left(\square+\frac{m^2c^2}{\hbar^2}\right)\psi=0  
}.  
$$

For $m=0$, it reduces to the wave equation.
While this solution seems elegant, it presents different weaknesses.
## Problems with the Klein-Gordon ansatz

- It has solutions with negative energy
- It holds:

$$ \frac d{dt} \int_{\mathbb{R^3}}d\bar r\ |\psi(\bar r, t)|^2 \neq 0$$

I.e. the integral of what we have defined of the probability density is time dependent, and hence not suitable anymore to be a probability density.

These problems can be solved in the context of QFT by promoting the wavefunction to an operator.
