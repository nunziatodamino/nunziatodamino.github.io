Suppose we want to describe a material property $A$. 
Experimental evidences shows that when the size of the system decreases over a certain range (in which range all the nanophysics happens), the value of the property $A$ changes. 
This fact is related broadly to the fact that when a system decrease its size, its surface contribution become significantly more important (see [[When the surface becomes important|this]] for a quantitative approach to the question)

In general we will call every relation that gives a relation between the material property $A$ and its size (generally implicitly described by the particle number $N$ or the cluster radius $R$) size equation.
The most general form for a size equation described respect the cluster radius $R$ is:

$$A(R) = A_{\infty}f(R)$$
Where $A_{\infty}$ is the value that property $A$ assume in the bulk limit, i.e. the value of $A$ for which the system has infinite radius and $f(R)$ is a generic analytical function that satisfy the condition $\lim_{R \to \infty} f(R) =1$.

We propose in the following some examples of size equations.

- Is possibile to relate the property $A$ to the system size, defined by its particle number $N$. If one calls $A_{\infty}$ the value that property $A$ assume in the bulk limit, i.e. when the number of particles becomes infinite, one has the relation:

$$A(N) = A_{\infty} \left( 1+ \frac{C_N}{N^\alpha} \right) \qquad C_N \in \mathbb{R}/\{0\}$$

In general $C_N$ and $\alpha$ are experimental values. This kind of consideration can also lead to the definition of an $N$ threshold under which the system can not be longer described by bulk properties only, but also surface properties must be taken in to consideration.

- An alternative way is to study the property $A$ in function of a radius $R$, i.e. imagining our system to be spherical. In this particular case $\tilde{A}_{\infty}$ represent the value of A for which the system has infinite radius. Note that $\tilde{A}_{\infty} = A_{\infty}$.
  So one has:

$$A(R) = A_{\infty} \left( 1+ \frac{C_R}{R^\alpha} \right) \qquad C_R \in \mathbb{R}/\{0\}$$

With the same consideration. We also offer a plot of the latter equation:

![[Pasted image 20230304102658.png|300]]

A detailed account on temperature size effects is given [[Zettelkasten/Introduction to Nanophysics/Approfondimenti/Thermodynamic size effect (TSE)|here]] .

