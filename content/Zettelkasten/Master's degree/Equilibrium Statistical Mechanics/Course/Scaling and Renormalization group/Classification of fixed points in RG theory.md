>[!info] **Fixed point in Hamiltonian space**
> We defined $[K^*]$ as a fixed point in Hamiltonian space a coupling constants set that does not change under decimation:
> 
> $$ [K^*] = \mathscr{R}_l([K^*]) $$

For any coupling constant set after a decimation we can define the correlation length:

$$ \xi([K']) =\frac{\xi([K])}{l} $$

Where we performed the decimation $[K']=\mathscr{R}_l([K])$. Then applying this for the fixed point definition:

$$ \xi([K^*]) =\frac{\xi([K^*])}{l} $$

Leading to either $0$ or $+\infty$ for the correlation length. This leads to another definition:

>[!info] **Critical and trivial fixed point**
>- A fixed point is trivial if $\xi([K^*]) = 0$
>- A fixed point is critical if $\xi([K^*]) = +\infty$

We can consider a concept of neighborhood of attraction in Hamiltonian space: a set of coupling constants that if decimated will lead to a given fixed point.

>[!info] **Basin of attraction of the point $[K^*]$**
>Consider the set $\{[K]\}$ in Hamiltonian space such that :
>
>$$\lim_{n \to \infty} \mathscr{R}^{(n)}_{l}[K] = [K^*]$$
>
>Then we will call said set basin of attraction of the point $[K^*]$.
>If the fixed point is a critical point this is called **critical manifold**.



We are now ready to state the following theorem:

>[!info] **Theorem**
>All the points $[K]$ belonging to a basin of attraction of a critical fixed point have the correlation length $\xi = +\infty$

- **Proof**

Consider the set of transformation that take a point from the basin to the fixed point:

$$ \xi([K]) =l\xi([K']) = l^2\xi([K'']) = \dots = l^n\xi([K^{(n)}]) $$

Assume by absurdum that $\xi([K])$ is finite. Then by rearranging:

$$ \xi([K^{(n)}]) = l^{-n}\xi([K]) $$

By taking the limit $n \to +\infty$ we obtain $\xi([K^{*}]) = +\infty =0$. Which is a contradiction.
We conclude that $\xi([K])$ is infinite.



