A probability generating function is a function utilized in order to evaluate the n-order moments of a probability distribution associated to a random variable
In order to give definition an examples we must distinguish between probability distribution associated to discrete random variables, i.e. discrete probability distributions and probability distribution associated to continuous random variables, i.e. probability density distributions.

>[!note] **Discrete generating function**
>Given a non negative discrete random variable, i.e. $n= \{ 0,1,2, \dots \}$ and its  probability mass function $f(n)$ we define generating function:
>$$ G(n,z) = \sum_{n=0}^{+\infty} f(n) z^n $$

Of extreme interest are it's properties:

>[!info] **Properties of the PGF**
> Given a discrete random variable $n$ and its PGF $G(n,z)$, we can state the following properties:
> 
>- Normalization : $G(n,0)=1$
>- Probability retrieval: $\mathbb{P}(n=k) = \frac{1}{k!} \frac{d^k}{dz^k} [G(n,z)]_{z=0}$
>- Moment evaluation (I) : $\frac{d^k}{dz^k}[G(n,z)]_{z=1} = \langle n(n-1)\dots(n-k+1)\rangle = \langle \frac{n!}{(n-k)!}\rangle$
>- Moment evaluation (II) : $\left(z\frac{d}{dz}\right)^k[G(n,z)]_{z=1} = \langle n^k\rangle$

https://www.google.com/url?q=https://www.stat.auckland.ac.nz/~fewster/325/notes/ch4.pdf&sa=U&ved=2ahUKEwjjkqSnnfuBAxXRhP0HHbVmDHYQFnoECAoQAg&usg=AOvVaw3CNhvmN25X1hqVoAW_X_Oy


