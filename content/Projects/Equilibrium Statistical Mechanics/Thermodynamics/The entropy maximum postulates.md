[[Projects/Equilibrium Statistical Mechanics/Thermodynamics/The fundamental problem of thermodynamics|The fundamental problem in thermodynamic]] can be solved formally by postulating the existence of the entropy function: 

![[Images/The entropy maximum postulates.png|500]]

In this way if one knows the entropy function, that should have the form:

$$ S=S(U, V, N_1, \dots, N_r) $$

Then one should automatically know the final equilibrium state.
In some schemes this is called **fundamental equation**
We now make an example to demonstrate it.
Suppose to have 2-composite system separated by an adiabatic wall. We have internal energies $U^{(1)}$ and $U^{(2)}$ in the subsystems, such that $U^{(1)}+U^{(2)} = U$.
Now we remove the walls and we wish to know the new equilibrium state $\tilde{U}^{(1)}$ and $\tilde{U}^{(2)}$.
If we know the system entropy we evaluate all the possible combinations of $\tilde{U}^{(1)}$ and $\tilde{U}^{(2)}$, with the constrain $\tilde{U}^{(1)}+\tilde{U}^{(2)}=U$ until the entropy reaches its maximum.
Those values then, by postulate, are the new equilibrium state. 

We now show some important mathematical properties

![[Images/The entropy maximum postulates-1.png|500]]

This implies that given a subsystem $\alpha$ 
 
 $$ S = \sum_{\alpha}S^{(\alpha)} \qquad \mbox{where}\quad S^{(\alpha)}=S^{(\alpha)}(U^{(\alpha)}, V^{(\alpha)}, N_1^{(\alpha)}, \dots, N_r^{(\alpha)})$$

The additivity property applied to spatially separate subsystems requires the following property: The entropy of a simple system is a homogeneous first-order function of the extensive parameters:

$$S^{(\alpha)}(\lambda U^{(\alpha)}, \lambda V^{(\alpha)}, \lambda N_1^{(\alpha)}, \dots, \lambda N_r^{(\alpha)}) =\lambda S^{(\alpha)}(U^{(\alpha)}, V^{(\alpha)}, N_1^{(\alpha)}, \dots, N_r^{(\alpha)}) \qquad \forall \alpha, \ \forall \lambda >0$$

Moreover due to the monotonicity:

$$ \left( \frac{\partial S}{\partial U} \right)_{V,N_1, \dots, N_r} >0 $$

This implies $\left( \frac{\partial S}{\partial U} \right)_{V,N_1, \dots, N_r} \neq 0$, i.e. local invertibility:

$$ U=U(S,V,N_1, \dots, N_r) $$

![[Images/The entropy maximum postulates-2.png|500]]