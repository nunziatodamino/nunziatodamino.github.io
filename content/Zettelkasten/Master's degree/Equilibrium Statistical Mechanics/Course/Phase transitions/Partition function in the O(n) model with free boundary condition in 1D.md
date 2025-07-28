We want to evaluate the partition function of the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/The O(n) model|The O(n) model]].
The idea behind it is simple, we use a recursion argument. For how the partition function is set up, see [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/A technicality about the partition function in the Ising-like models (optional)|A technicality about the partition function in the Ising-like models (optional)]].
We have:

$$
\begin{aligned}
\mathcal{Z}_N &= \int_{||\bar{s}_i||=1} \prod_{i=1}^N d\bar{s}_i\ e^{-\beta\mathscr{H}} = \int_{||\bar{s}_i||=1} \prod_{i=1}^N d\bar{s}_i\ e^{K[\bar{s}_1 \cdot \bar{s}_2 + \bar{s}_2 \cdot \bar{s}_3+ \dots + \bar{s}_{N-1} \cdot \bar{s}_N] } = \\
&= \int_{||\bar{s}_N||=1} d\bar{s}_N\ e^{K[\bar{s}_{N-1} \cdot \bar{s}_{N}] } \int_{||\bar{s}_i||=1} \prod_{i=1}^{N-1} d\bar{s}_i\ e^{K[\bar{s}_1 \cdot \bar{s}_2 + \bar{s}_2 \cdot \bar{s}_3+ \dots + \bar{s}_{N-2} \cdot \bar{s}_{N-1}] }  \\

\end{aligned}
$$

Now we choose as our first axis in our reference frame one parallel to $\bar{s}_{N-1}$, so that $\bar{s}_{N-1} \cdot \bar{s}_{N} = s_{N-1}s_N\cos\vartheta = s_{N1}s_N =s_{N1}$ which by definition of scalar product is the parallel component respect to the $\bar{s}_{N-1}$ direction. Note that we use implicitly that we are on the hyper-sphere $||\bar{s}_N||=1$.
Than if we define:

$$ G(K) = \int_{||\bar{s}_N||=1} d\bar{s}_N\ e^{K[\bar{s}_{N-1} \cdot \bar{s}_{N}] } = \int_{||\bar{s}_N||=1} d\bar{s}_N\ e^{Ks_{N1}}  $$

We have in the end:

$$ \mathcal{Z}_N = G(K) \mathcal{Z}_{N-1} $$

If we proceed further in the recursion, say we make the following step, we obtain:

$$ \mathcal{Z}_{N-1} = G'(K) \mathcal{Z}_{N-2} $$

Where:

$$ G'(K) = \int_{||\bar{s}_{N-1}||=1} d\bar{s}_{N-1}\ e^{Ks_{(N-1)1}} $$

Where, of course, the second axis of our reference frame has to be chosen parallel to ${s}_{N-2}$. Is clear, by the formal substitution $N' \iff N-1$ that $G'(K) = G(K)$.

The total recursion formula is then

$$ \mathcal{Z}_N = G(K)^{N-1} $$

Then all the fuss reduces to the evaluation of $G(K)$.


