One can present [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The energy-entropy argument|The energy-entropy argument]] in a more rigorous way, following the so called Peierls argument to prove that the 2D Ising presents a phase transition. Here we just show the argument in a qualitative way, leaving out the technical details.
This argument is strictly correlated to the [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Spontaneous symmetry breaking in the spin-1 Ising model|Spontaneous symmetry breaking in the spin-1 Ising model]], i.e. to achieve a phase transition one has first turn on a magnetic field, then take it to 0, and then perform the thermodynamic limit.
As we have seen these 2 limits cannot be switched. One can simulate the presence of a small magnetic field by considering specific boundary condition : specifically one has to put all the boundary spins either up or down.

![[Images/The Peierls argument.png|400]]

So let's consider a 2D Ising model with said BC and call $N_+$ the number of spins up and $N_-$ the number of spins down.
Clearly $N = N_+ + N_-$.
One can also write the average magnetization per spin as:

$$ \braket{m}_N  = \frac{\braket{N_+} - \braket{N_-}}{N} = 1- 2\frac{\braket{N_-}}{N}$$

We want to achieve a non-zero magnetization. So we want that:

$$ \braket{m}_N \ge \varepsilon \qquad \varepsilon >0, \forall N $$

This is equivalent to the condition on the fraction of down spins:

$$ \frac{\braket{N_-}}{N} \le \frac{1}{2}- \varepsilon' \qquad \varepsilon' \equiv \frac{\varepsilon}{2} $$

Peierls proved that

$$ \frac{\braket{N_-}}{N} \le f_D(x) \qquad x = e^{-4\beta J} $$

Where specifically:

$$ f_D(x) = \frac{x^2}{36}\frac{2-x}{(1-x)^2}\qquad x = e^{-4\beta J}  $$

Note that the function is continuous, does not depend on $N$, and $\lim_{x \to 0}f_D(x) = 0$.  
Moreover any $x$ is positive.
Is possible to choose $x$ (and consequently the temperature) such that :

$$ \frac{\braket{N_-}}{N} \le \frac{x^2}{36}\frac{2-x}{(1-x)^2} \le\frac{1}{2}- \varepsilon' \qquad x = e^{-4\beta J} $$
 

**Now, in order to achieve a phase transition we have to go from $m \neq 0$ to $m = 0$ (i.e have a change in the order parameter).**
So let's find the $x$ value such that the magnetization is 0.
This value is obtained by solving:

$$ \frac{x^2}{36}\frac{2-x}{(1-x)^2} =\frac{1}{2} $$

For this value we are implicitly say that $\braket{m}_N =0$. We will call this value $x_{1/2}$.
In general a value for which $\braket{m}_N >0$ will solve the inequality above. Any value will be lower than $x_{1/2}$, due to the inequality sign. Moreover one of this values will be the critical value $x_c$, due the fact that the order parameter goes to zero.
We conclude that :

$$ 0<x_c<x_{1/2} $$

**Given that $x_c$ is bounded, and is definition is related to the critical temperature, we showed that a phase transition must occur**.

The upper bound can be found in many ways, we here just report that $x_{1/2} \simeq 0.794$


