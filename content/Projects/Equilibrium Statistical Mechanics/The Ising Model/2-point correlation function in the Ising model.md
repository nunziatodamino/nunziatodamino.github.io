Suppose we want to evaluate the correlation between 2 spins in a lattice.
Then, apart from normalization, one should evaluate:

$$ \Gamma_N(R) = \braket{s_1s_R}N - \braket{s_1}N\braket{s_R}N$$

Note that evaluating the correlation from spin one is a matter of choice, given that we are implicitly assuming that the system is translationally invariant.
We expect, for a large collection of spins, that the bigger the distance, the more uncorrelated the two are, namely:

$$ \Gamma_N(R) \sim \exp\left( -R/\xi \right) \qquad, N\gg1, R\to +\infty  $$

Where we call $\xi$ correlation length. In this way we can evaluate the correlation length by definition:

$$ \xi^{-1} = \lim_{R \to +\infty}\left[-\frac{1}{R} \ln|\lim_{N\to+\infty} \Gamma_N(R)|\right] $$

Note that we put the absolute value because in simulation when evaluating the correlation function it present fluctuations that can lead to negative values.
We can now proceed in the calculation, specifically in the evaluation of $\Gamma_N(R)$, that we will evaluate term by term, using the transfer matrix method.

- $\braket{s_1s_R}_N$ term

$$
\begin{aligned}
\braket{s_1s_R}_N &= \frac{1}{\mathcal{Z}_N}\text{Tr}\ s_1s_R e^{-\beta\mathscr{H}} = \\
&= \frac{1}{\mathcal{Z}_N}\text{Tr}\ s_1\braket{s_1|T|s_2}\braket{s_2|T|s_3}\dots\braket{s_{R-1}|T|s_R}s_R\braket{s_R|T|s_{R+1}}\dots\braket{s_{N-1}|T|s_N}\braket{s_N|T|s_1}

\end{aligned}
$$

We now use $\sum_{s_1=\pm1}\ket{s_i}\bra{s_i} = \mathbb{1}$ for all spins except $s_1$ and $s_R$, i.e. over all free spins:

$$
\begin{aligned}
\braket{s_1s_R}_N= \frac{1}{\mathcal{Z}_N}\sum_{s_1 \pm 1}\sum_{s_R \pm 1} s_1\braket{s_1|T^{R-1}|s_R}s_R\braket{s_R|T^{N-R+1}|s_1}
\end{aligned}
$$

Now we expand the transfer matrix using its eigenvalue representation, as seen in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/The transfer matrix method - some general properties|The transfer matrix method - some general properties]] :

$$
\begin{aligned}
\braket{s_1s_R}_N &= \frac{1}{\mathcal{Z}_N}\sum_{s_1 \pm 1}\sum_{s_R \pm 1} s_1\braket{s_1|\sum_{k=1}^{N} \ket{t_k} \lambda^{R-1}_k \bra{t_k}s_R}s_R\braket{s_R|\sum_{l=1}^{N} \ket{t_l} \lambda^{N-R+1}_l \bra{t_l}s_1} = \\
&= \frac{1}{\mathcal{Z}_N}\sum_{k=1}^{N}\sum_{l=1}^{N}\sum_{s_1 \pm 1}\sum_{s_R \pm 1} s_1\braket{s_1 \ket{t_k} \lambda^{R-1}_k \bra{t_k}s_R}s_R\braket{s_R \ket{t_l} \lambda^{N-R+1}_l \bra{t_l}s_1} =\\
&= \frac{1}{\mathcal{Z}_N}\sum_{k=1}^{N}\sum_{l=1}^{N}\sum_{s_1 \pm 1}\sum_{s_R \pm 1} \braket{t_l|s_1}s_1\braket{s_1 \ket{t_k} \lambda^{R-1}_k \bra{t_k}s_R}s_R\braket{s_R |t_l} \lambda^{N-R+1}_l 
\end{aligned}
$$

Where in the last line we have done a simple reordering, giving that all terms are scalar.
Now we can use the definition of the spin matrix $S$:

$$
\begin{aligned}
\braket{s_1s_R}_N 
&= \frac{1}{\mathcal{Z}_N}\sum_{k=1}^{N}\sum_{l=1}^{}\bra{t_l}S_1 \ket{t_k} \lambda^{R-1}_k \bra{t_k}S_R\ket{t_l} \lambda^{N-R+1}_l 
\end{aligned}
$$

Finally, we use the fact that $\mathcal{Z}_{N}(\beta, K, h) = \text{Tr}\ T_D^N = \sum_{i=1}^N \lambda_{i}^N = \lambda_+^N + \lambda_-^N + \sum_{i=1}^{n+2} \lambda_{i}^N$ , so that we substitute and take as common factor the largest eigenvalue, whose uniqueness and existence is guaranteed by the [[Projects/Equilibrium Statistical Mechanics/Phase transitions/Perron-Frobenius Theorem|Perron-Frobenius Theorem]]:

$$
\begin{aligned}
\braket{s_1s_R}_N 
&= \frac{\sum_{k=1}^{N}\sum_{l=1}^{N}\bra{t_l}S_1 \ket{t_k} \lambda^{R-1}_k \bra{t_k}S_R\ket{t_l} \lambda^{N-R+1}_l }{\sum_m\lambda_m}^N = \\
&= \frac{\sum_{k=1}^{N}\sum_{l=1}^{N}\bra{t_l}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_l} \left(\frac{\lambda_l}{\lambda_+}\right)^{N-R+1} }{\sum_m\left(\frac{\lambda_m}{\lambda_+}\right)^N}
\end{aligned}
$$

Where we  used $\lambda_+ \equiv \lambda_1$.
Now, all eigenvalues fractions are less than 1, except when $l=1,k=1,m=1$, in that case the fraction is 1, because $\lambda_1\equiv\lambda_+$
If we now take the thermodynamic limit $N \to +\infty$, only the $l=1$ term and the term $m=1$ survives in the sum: 

$$
\begin{aligned}
\lim_{N\to +\infty}\braket{s_1s_R}_N &= \sum_{k=1}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1} 
\end{aligned}
$$
- $\braket{s_R}_N$ term

With the same ansatz:

$$
\begin{aligned}
\braket{s_R}_N &= \frac{1}{\mathcal{Z}_N}\text{Tr}\ s_R e^{-\beta\mathscr{H}} = \\

&= \frac{1}{\mathcal{Z}_N}\text{Tr}\ \braket{s_1|T|s_2}\braket{s_2|T|s_3}\dots\braket{s_{R-1}|T|s_R}s_R\braket{s_R|T|s_{R+1}}\dots\braket{s_{N-1}|T|s_N}\braket{s_N|T|s_1} = \\

&= \frac{1}{\mathcal{Z}_N}\sum_{s_1 \pm 1}\sum_{s_R \pm 1} \braket{s_1|T^{R-1}|s_R}s_R\braket{s_R|T^{N-R+1}|s_1} = \\

&= \frac{1}{\mathcal{Z}_N}\sum_{s_1 \pm 1} \braket{s_1|T^{R-1}S_RT^{N-R+1}|s_1} = \\

&= \frac{1}{\mathcal{Z}_N} \text{Tr} [T^{R-1}S_RT^{N-R+1}] = \\

&= \frac{1}{\mathcal{Z}_N} \text{Tr} [S_R T^{R-1}T^{N-R+1}] = \\

&= \frac{1}{\mathcal{Z}_N} \text{Tr} [T^{N}S_R ] = \\

&= \frac{1}{\mathcal{Z}_N}\sum_{s_1 \pm 1} \braket{s_1|T^{N}S_R|s_1} = \\

&= \frac{1}{\mathcal{Z}_N}\sum_{k=1}^{N} \sum_{s_1 \pm 1} \lambda_k^N \braket{s_1|t_k}\braket{t_k|S_R|s_1} = \\

&= \frac{\sum_{k=1}^{N} \sum_{s_1 \pm 1} \left(\frac{\lambda_k}{\lambda_+}\right)^{N} \braket{s_1|t_k}\braket{t_k|S_R|s_1}}{\sum_m\left(\frac{\lambda_m}{\lambda_+}\right)^N} = \\

\end{aligned}
$$

Where we used the cyclic property of the trace.
Finally, in the thermodynamic limit, only the $k=1$ term and the term $m=1$ survives in the sum: 


$$
\begin{aligned}
\lim_{N \to +\infty}\braket{s_R}_N 
&= \sum_{s_1 \pm 1}  \braket{s_1|t_1}\braket{t_1|S_R|s_1}= \\
&=   \braket{t_1|S_R\sum_{s_1 \pm 1}|s_1}\braket{s_1|t_1}= \\
&= \braket{t_1|S_R|t_1}
\end{aligned}
$$

Given this result we can finally write :

$$
\begin{aligned}
\lim_{N\to +\infty}\braket{s_1s_R}_N 

&= \sum_{k=1}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1} = \\

&=\bra{t_1}S_1 \ket{t_1}  \bra{t_1}S_R\ket{t_1} +  \sum_{k=2}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1} = \\

&= \lim_{N \to +\infty}\braket{s_1}_N\braket{s_R}_N +  \sum_{k=2}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1} = \\

\end{aligned}
$$

Then, simply by rearranging:

$$
\begin{aligned}
\lim_{N\to +\infty}\Gamma_N(R)

= \sum_{k=2}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1}

\end{aligned}
$$

Now we can take the long range limit to evaluate finally the inverse of the correlation coefficient.
Given that $\lambda_2 \equiv \lambda_- > \lambda_k, \forall k >2$, we consider that the term with $k=2$ is the dominant term in the sum, so that we approximate the total sum with just the leading term:

$$ \begin{aligned}
\xi^{-1} 
&= \lim_{R \to +\infty}\left[-\frac{1}{R-1} \ln|\lim_{N\to+\infty} \Gamma_N(R)|\right] \\
&= \lim_{R \to +\infty}\left[-\frac{1}{R-1} \ln\left|\sum_{k=2}^{N}\bra{t_1}S_1 \ket{t_k} \left(\frac{\lambda_k}{\lambda_+}\right)^{R-1} \bra{t_k}S_R\ket{t_1}\right|\right] \simeq \\
&\simeq \lim_{R \to +\infty}\left[-\frac{1}{R-1} \ln\left|\bra{t_1}S_1 \ket{t_2} \left(\frac{\lambda_-}{\lambda_+}\right)^{R-1} \bra{t_2}S_R\ket{t_1}\right|\right] =\\
&= \lim_{R \to +\infty}\left[-\frac{1}{R-1} \ln\left|\bra{t_+}S_1 \ket{t_-} \left(\frac{\lambda_-}{\lambda_+}\right)^{R-1} \bra{t_-}S_R\ket{t_+}\right|\right] =\\
\end{aligned}
$$

Also in the last line we relabeled $\ket{t_1} \equiv \ket{t_+}$ and $\ket{t_2} \equiv \ket{t_-}$ to recall explicitly that they are the eigenvector specifically associate with the largest and second largest eigenvalue respectively.
Now we can do the limit easily:

$$ \begin{aligned}
\xi^{-1} 
&= - \ln\left| \frac{\lambda_-}{\lambda_+}\right| - \lim_{R \to +\infty}\left[-\frac{1}{R-1} \ln\left|\bra{t_+}S_1 \ket{t_-} \bra{t_-}S_R\ket{t_+}\right|\right] =\\
&= - \ln\left( \frac{\lambda_-}{\lambda_+}\right)

\end{aligned}
$$

We then obtain the interesting result for which the correlation length is function only of the 2 largest eigenvalues of the transfer matrix