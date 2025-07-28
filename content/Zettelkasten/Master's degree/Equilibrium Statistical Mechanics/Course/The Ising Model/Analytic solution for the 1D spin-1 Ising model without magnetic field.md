We present an analytic solution for the 1 dimensional spin-1 Ising model without magnetic field $(H=0)$ using different methods
## Recursive method

We consider a 1-spin chain with $H=0$ and free boundary condition (respect to the classic PBC, the $N+1$ configuration can assume any value, or one can set one boundary at $-1$ , i.e $s_{-1}=\pm 1 \vee s_{N+1}=\pm 1$).
Let's draw a possible configuration:

![[Images/Analytic solution for the 1D spin-1 Ising model.png|500]]

Suppose now that we want to evaluate the canonical partition function for $N$ spins:

$$ \mathcal{Z}_N(\beta) = \text{Tr} \exp\left( \beta J \sum_{<i,j>}s_is_j \right) = \text{Tr} \exp\left( K \sum_{i=1}^{N-1}s_is_{i+1} \right) $$

Where we defined $K \equiv \beta J$.
Now let's add a spin at the end and do the same

$$ \mathcal{Z}_{N+1}(\beta) = \text{Tr} \exp\left( K \sum_{i=1}^{N}s_is_{i+1} \right) = \mathcal{Z}_{N}(\beta)\sum_{s_{N+1}=\pm1}\exp\left( K s_Ns_{N+1}\right) $$

Leading us to this recursion relation. Moreover we can write:

$$\sum_{s_{N+1}=\pm1}\exp\left( K s_Ns_{N+1}\right) = \exp\left( K s_N\right)+ \exp\left( -K s_N\right) = 2 \cosh(Ks_N)=2 \cosh(K)$$

Where in the last line we used the fact that $\cosh(K) = \cosh(-K)$ (given that $s_N = \pm 1$).
So that one obtains in the end:

$$ \mathcal{Z}_{N+1}(\beta) =\mathcal{Z}_{N}(\beta)2 \cosh(K) $$

Then clearly, by recursion:

$$ \mathcal{Z}_{N+1}(\beta) =\mathcal{Z}_{N}(\beta)2 \cosh(K) = \mathcal{Z}_{N-1}(\beta)(2 \cosh(K))^2 = \dots = \mathcal{Z}_{1}(\beta)(2 \cosh(K))^{N}$$

To conclude, given that $\mathcal{Z}_{1}(\beta) = \sum_{s_1 = \pm 1} 1 = 2$:

$$ \mathcal{Z}_{N+1}(\beta) = 2(2 \cosh(K))^{N}$$

Or, if one prefers:

$$ \mathcal{Z}_{N}(\beta) = 2(2 \cosh(K))^{N-1}$$

### Free energy

From this is easy to evaluate the free energy by taking the log:

$$
\begin{aligned}
F_N(\beta) &= -k_BT \ln \mathcal{Z}_{N}(\beta) = -k_BT \ln2 -(N-1)k_BT \ln[2 \cosh(K)] =  \\
&= -k_BT [\ln2 +(N-1) \ln(2 \cosh(K))]
\end{aligned}
$$

From this one can evaluate explicitly the bulk term:

$$ f_b(T, \{K_n\}) = \lim_{N\to +\infty} \frac{F_N}{N} = -k_BT \ln(2 \cosh(K)) $$

## High temperature series expansion : magnetization evaluation

Even if one can simple get the magnetization by differentiating the free energy ($\frac{\partial f_b}{\partial H}$ that one can is immediately to be 0), is instructive to use another method to arrive to the same result.
This approach is known in literature as high temperature series expansion.
First we introduce the following identity:

>[!iinfo] **Lemma**
$$\exp(Ks_is_{i+1}) = \cosh(K) + s_is_{i+1} \sinh(K) $$
>
>- **Proof** Given that $s_js_k = \pm 1$ and $\cosh$ is even and $\sinh$ is odd : $\cosh(K) = \cosh(Ks_js_k)$ and $\sinh(K) = s_js_k\sinh(Ks_js_k) \iff s_js_k\sinh(K) = \sinh(Ks_js_k)$, $\forall j,k$. Then the RHS:
>
$$ \cosh(K) + s_is_{i+1} \sinh(K) = \cosh(Ks_is_{i+1}) + \sinh(Ks_is_{i+1}) =\exp(Ks_is_{i+1})  $$
>
Where we used the exponential expansion of the hyperbolic functions.
Note also that the identity can be recasted as :
>
$$\exp(Ks_is_{i+1}) = \cosh(K)\left[ 1 + s_is_{i+1} \tanh(K)\right] $$

Then one can evaluate the partition function as:

$$ 
\begin{aligned}
\mathcal{Z}_N(\beta) &= \text{Tr} \exp\left( K \sum_{i=1}^{N-1}s_is_{i+1} \right) = \text{Tr} \prod_{i=1}^{N-1} \exp(Ks_is_{i+1}) \\ &= \text{Tr} \prod_{i=1}^{N-1} \left(\cosh(K)\left[ 1 + s_is_{i+1} \tanh(K)\right] \right) = \\
&= \cosh(K)^{N-1}\ \text{Tr}\prod_{i=1}^{N-1}\left[  1 + s_is_{i+1} \tanh(K)\right]
\end{aligned}
$$

To see what's going on, let's analyze the term for a linear chain of 3 spins.
Then:

$$
\begin{aligned}
\prod_{i=1}^{N-1}\left[  1 + s_is_{i+1} \tanh(K)\right] &= (1+s_1s_2\tanh(K))(1+s_2s_3\tanh(K)) = \\
&= 1 + s_1s_2\tanh(K) + s_2s_3\tanh(K) + s_1s_2s_3s_4\tanh(K)^2
\end{aligned}
$$

Iterating this reasoning for $4,5,\dots,N$ one can convince itself that, except for the $1$ at the beginning, each term is of the form:

$$ s_{i_1}s_{i_{1+1}}\dots s_{i_MC}s_{i_{C+1}}\tanh(K)^M $$

Where $C$ is the cardinality of a spin set $\{ i_1, \dots, i_C \}$ where these spins are not necessarily contiguous on the chain.
Note that one can also include $1$ as one of these terms in the limiting case $C = 0$, and also that in the expression figures for each term an even number of spins.
From this we can see that the sum over $\{\bar{s}\}$ of these terms, for $C \neq 0$, is 1.
In fact, for any pair $\forall i,j$: 

$$ \text{Tr}\ s_is_j = 2^{N-2}\sum_{s_i=\pm 1}\sum_{s_j=\pm 1}s_is_j = 2^{N-2} \sum_{s_j=\pm 1}s_j-s_j = 0 $$

So that in the end:

$$\text{Tr}\prod_{i=1}^{N-1}\left[  1 + s_is_{i+1} \tanh(K)\right] = \text{Tr}\ 1 + \sum_{\{C\}}s_{i_1}s_{i_{1+1}}\dots s_{i_MC}s_{i_{C+1}}\tanh(K)^M = \text{Tr}\ 1
$$

Then one obtains in the end:

$$ 
\begin{aligned}
\mathcal{Z}_N(\beta) 
&= \cosh(K)^{N-1}\ \text{Tr}\prod_{i=1}^{N-1}\left[  1 + s_is_{i+1} \tanh(K)\right] = \cosh(K)^{N-1} \text{Tr} \ 1 = \\
&=2^N \cosh(K)^{N-1}
\end{aligned}
$$

Where we used implicitly $\text{Tr} \ 1 = 2^N$ , valid for the spin-1 Ising model.
From this we can evaluate the magnetization by definition of thermal average:

$$ \braket{s_j} = \frac{1}{\mathcal{Z}_n} \text{Tr} \exp\left( K \sum_{i=1}^{N-1}s_js_is_{i+1} \right) =\frac{1}{\mathcal{Z}_n}  \cosh(K)^{N-1}\ \text{Tr}\prod_{i=1}^{N-1}s_j\left[  1 + s_is_{i+1} \tanh(K)\right] $$

Is now clear, for the same argument as before, that this is always 0, given that the $M=0$ term is now $s_j$ and not 1.
We then obtain what we should expect:

$$ \braket{s_j} = 0 $$
