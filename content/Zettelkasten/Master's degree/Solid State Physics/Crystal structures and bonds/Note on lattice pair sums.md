Let's clarify what a sum over a [[Zettelkasten/Master's degree/Solid State Physics/Crystal structures and bonds/Bravais lattice]] means.
Suppose we have something of the type:

$$ \sum_{\bar{R}} f(\bar{R}) $$

Where $\bar{R}$ is a vector of the Bravais lattice. Then, as seen in [[Zettelkasten/Master's degree/Basic Mathematics/Fourier Series in 3-D]], if we write $\bar{R}=n\bar{a}_1+m\bar{a}_2+l\bar{a}_3,\ n,m,l \in \mathbb{Z}$, we have:

$$ \sum_{\bar{R}} f(\bar{R}) \equiv \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty} f(n\bar{a}_1+m\bar{a}_2+l\bar{a}_3) $$

Same holds for sums over pairs:

$$ \sum_{\bar{R},\bar{R}'} f(\bar{R},\bar{R}') $$

If we define $\bar{R}=n\bar{a}_1+m\bar{a}_2+l\bar{a}_3,\ n,m,l \in \mathbb{Z}$ and $\bar{R}'=n'\bar{a}_1+m'\bar{a}_2+l'\bar{a}_3,\ n',m',l' \in \mathbb{Z}$ we have:

$$ \sum_{\bar{R},\bar{R}'} f(\bar{R},\bar{R}') \equiv \sum_{n=-\infty}^{+\infty}\sum_{m=-\infty}^{+\infty}\sum_{l=-\infty}^{+\infty}\sum_{n'=-\infty}^{+\infty}\sum_{m'=-\infty}^{+\infty}\sum_{l'=-\infty}^{+\infty}  f(n\bar{a}_1+m\bar{a}_2+l\bar{a}_3,n'\bar{a}_1+m'\bar{a}_2+l'\bar{a}_3 )$$

One can also, for ease of notation, write:

$$\sum_{\bar{R},\bar{R}'} f(\bar{R},\bar{R}') \equiv \sum_{i,j\in \mathbb{Z}^3}f(\bar{R}_i,\bar{R}_j) $$ 
At the cost of complicating the index, that becomes a multi-index. Note that this notation is equivalent to the one before only in the 1-dimensional case.
We will try where possible to avoid this notation.
