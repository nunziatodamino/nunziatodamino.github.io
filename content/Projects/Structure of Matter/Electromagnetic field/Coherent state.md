We define coherent state the eigenstate of the annihilation operator:

$$ \hat{a} \ket{\phi} = \phi \ket{\phi}$$

Given that the annihilation operator is not hermitian, the eigenvalue is in general a complex number $\alpha \in \mathbb{C}$.

#### Coherent state expansion in a single mode state

Consider the coherent state definition  
  $$\hat a\,|\phi\rangle=\phi\,|\phi\rangle.$$

I want now to expand the given vector in single-mode space:

$$|0\cdots n_{ks}\cdots\rangle \equiv |n\rangle.$$

So we have  
$$|\phi\rangle=\frac{1}{\sqrt{N}}\sum_n \Phi_n\,|n\rangle.$$

Now, using the definition of the annihilation operator:  

$$
\begin{aligned}
\hat a\,|\phi\rangle
&=\frac{1}{\sqrt{N}}\sum_n \Phi_n\,\hat a\,|n\rangle =\frac{1}{\sqrt{N}}\sum_n \Phi_n\,\sqrt{n}\,|n-1\rangle = \\
&\phi\,|\phi\rangle=\frac{1}{\sqrt{N}}\sum_n \phi\ \Phi_{n}|n\rangle.
\end{aligned}
$$

Then, by projecting on $\langle n'|$:  
$$
\begin{aligned}
\sum_n \Phi_n\sqrt{n}\,\langle n'|n-1\rangle &= \sum_n \phi\ \Phi_{n}\langle n'|n\rangle \\
\sum_n \Phi_n\sqrt{n}\, \delta_{n', n-1}  &= \sum_n \phi\ \Phi_{n} \delta_{n', n} \\
\sum_n \Phi_n\sqrt{n}\, \delta_{n' + 1, n-1}  &= \sum_n \phi\ \Phi_{n} \delta_{n', n} \\
\Phi_{n+1}\sqrt{n+1}&=\phi\,\Phi_n
\end{aligned}
$$

Where we used the Kronecker delta translation property. 
So this is a recursion formula:  

$$\Phi_{n}\sqrt{n}=\phi\,\Phi_{n-1}$$

We have then:

$$
\begin{aligned}
\Phi_n\sqrt{n}=\phi\,\Phi_{n-1}
\ &\Rightarrow\ 
\Phi_n=\frac{1}{\sqrt{n}}\phi\,\Phi_{n-1} = \\
&=\frac{1}{\sqrt{n}}\phi\left(\frac{1}{\sqrt{n-1}}\phi\,\Phi_{n-2}\right)=\cdots = \frac{1}{\sqrt{n!}} \phi^n \Phi_0\end{aligned}
$$

In the end, as $\Phi_0$ is a coefficient that will be tucked in the normalization of the wavefunction, it can be chosen arbitrarily. For simplicity we choose $\Phi_0 = 1$.
This leads to the following rewriting:

$$|\phi\rangle=\frac{1}{\sqrt{N}}\sum_n \frac{1}{\sqrt{n!}} \phi^n |n\rangle$$

Now we rewrite the $\ket{n}$ respect the vacuum state:

$$|\phi\rangle= \frac{1}{\sqrt{N}}\sum_n \frac{1}{\sqrt{n!}} \phi^n \frac{1}{\sqrt{n!}} (\hat{a}^\dagger)^n   |0\rangle  = \frac{1}{\sqrt{N}}\sum_n  \frac{1}{n!} (\phi\hat{a}^\dagger)^n |0\rangle = \frac{1}{\sqrt{N}} e^{\phi\hat{a}^\dagger}  |0\rangle  $$

We fix the normalization coefficient by imposing:

$$ 
\begin{aligned}
\braket{\phi|\phi} = 1 \quad \iff \quad 1 &= \left( \frac{1}{\sqrt{N}}\sum_m \frac{1}{\sqrt{m!}} (\phi^*)^m \langle m |\right) \left( \frac{1}{\sqrt{N}}\sum_n \frac{1}{\sqrt{n!}} \phi^n |n\rangle\right) = \\
&= \frac{1}{N} \sum_m \sum_n \frac{1}{\sqrt{m!}} \frac{1}{\sqrt{n!}} \phi^n(\phi^*)^m \delta_{mn} = \frac{1}{N} \sum_n \frac{1}{n!} (|\phi|^2)^n = \frac{e^{|\phi|^2}}{N}  
\end{aligned}
$$

So, in the end: 

$$|\phi\rangle= \frac{1}{\sqrt{N}} e^{\phi\hat{a}^\dagger}  |0\rangle =  e^{-\frac{|\phi|^2}{2}} e^{\phi\hat{a}^\dagger}  |0\rangle $$

#### Coherent state expansion respect a separable state
Instead of thinking in term of single mode state, lets consider a general state of the Fock space $| n_{\bar{k}s} \dots  n_{\bar{k}'s} \dots \rangle \equiv  | \{ n_{\bar{k}s} \} \rangle$, where $\{ n_{\bar{k}s} \}$ is the collection of the occupation number of the state (i.e. a multi-index).
Then the same ansatz as before applies:

$$|\phi\rangle=\frac{1}{\sqrt{N}}\sum_{\{ n_{\bar{k}s} \}} \Phi_{\{ n_{\bar{k}s} \}}\,|\{ n_{\bar{k}s} \}\rangle.$$

While this time:

  $$\hat a_{\bar{k}s}\,|\phi\rangle=\phi_{\bar{k}s}\,|\phi\rangle \qquad \forall \ \bar{k}, s$$

We observe that by construction $|\{ n_{\bar{k}s} \} \rangle$ is separable:

$$ | \{ n_{\bar{k}s} \} \rangle  = \bigotimes_{\bar{k}, s}| n_{\bar{k}s}  \rangle $$

Then we have: 

$$|\phi\rangle=\frac{1}{\sqrt{N}}\sum_{\{ n_{\bar{k}s} \}} \Phi_{\{ n_{\bar{k}s} \}}\ \left( \bigotimes_{\bar{k}, s}| n_{\bar{k}s}  \rangle \right) $$

If now we are able to exchange the sum with the tensor product, we have that a general state is a tensor product of single mode states.  But it is always possible ? **The answer is in general no**, and it can be done only with states that admits the decomposition $\Phi_{\{ n_{\bar{k}s} \}} = \Phi_{ n_{\bar{k}s} } \dots  \Phi_{ n_{\bar{k}'s} } \dots$ i.e. with separable states (This rises from the fact that the tensor product is bi-linear, one can convince him\herself by consider the case of 2 non-zero occupation numbers ).
But by this definition of coherent states, this is always the case.
So one can write the coherent state as a product of single mode states:

$$|\phi\rangle= \bigotimes_{\bar{k}, s}| \phi_{\bar{k}s}  \rangle  $$

Then by applying the previous results, one obtains the decomposition:

$$|\phi\rangle= \prod_{\bar{k}s} e^{-\frac{|\phi_{\bar{k}s}|^2}{2}} e^{\phi_{\bar{k}s}\hat{a}_{\bar{k}s}^\dagger}  |0\dots\ 0\rangle $$



