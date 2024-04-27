Suppose we want to evaluate the [[s-point correlation functions|s-point correlation function]] of random variables that are [[Multivariate Gaussian probability density function|Gaussian distributed]].
If we have 2-point correlation function this is easy, as we saw that:

$$ \braket{x_ix_j}=A^{-1}_{ij} $$

==Moreover, if s is an odd number the s-point correlation is 0, given the fact that the Gaussian pdf is even==.
The only interesting case is then to evaluate the s point correlation function when s is an even number. 
Luckily there is no need to evaluate it directly, but we can use the so called Wick's theorem:

>[!info] **Wick's theorem**
> If we consider the zero mean Gaussian random vector $X=(x_1,x_2,\dots x_s)$ its s-point correlation function is:
> 
> $$ \braket{x_1,x_2,\dots x_s}= \sum_{p\in P^2_s}\prod_{\{i,j\}\in p}\braket{x_i,x_j} = \sum_{p\in P^2_s}\prod_{\{i,j\}\in p}A^{-1}_{ij} $$
> 
> Where $P_s^2$ is the set of all possible pairings of the set $\{ 1,2,\dots, s \}$. Once a pairing is choosen, one does the multiplication between them.

In order to understand better the theorem is of paramount importance to do some example.

- $s=4$
We consider the set $\{1,2,3,4\}$. Its possible pairing are: $p_1=((1,2);(3,4))$, $p_2=((1,3);(2,4))$, $p_3=((1,4);(1,3))$, so that we will have:

$$ \braket{x_1x_2x_3x_4}=\braket{x_1x_2}\braket{x_3x_4}+\braket{x_1x_3}\braket{x_2x_4}+\braket{x_1x_4}\braket{x_3x_1} $$

- $s=6$
Is interesting to now a priori how many terms to expect.
==In general from s terms we expect to form $(s-1)!!$ possible pairings==. So here we will expect $5!!=5\cdot3\cdot1=15$ terms.
- [ ] write a python code that generates these terms
