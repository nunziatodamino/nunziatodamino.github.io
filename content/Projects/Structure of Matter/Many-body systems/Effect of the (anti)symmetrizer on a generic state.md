Given the generic space construction of $\mathcal{H}_N$ seen in [[Fermions and Bosons]], let's see the effect that has the application of the (anti)symmetrizer on a generic state.
To do so the best strategy is to evaluate the application on the basis.
We define:

$$
\begin{aligned}
\ket{\alpha_1, \dots, \alpha_N}_{\text{A/S}} &= \sqrt{N!}\ \hat{\mathfrak{P}}_{B,F}\ket{\alpha_1, \dots, \alpha_N} = \frac1{\sqrt{N!}} \sum_{\pi \in S_N}\xi^\pi \hat P_\pi \ket{\alpha_1, \dots, \alpha_N} = \\
&=\frac1{\sqrt{N!}} \sum_{\pi \in S_N}\xi^\pi \ket{\alpha_{p_1}, \dots, \alpha_{p_N}}
\end{aligned}
$$

- **Observation**
	First we observe that in the fermionic case is already included in this prescription the [[Pauli exclusion principle]].
	In fact, consider, say $\ket{\alpha_1} = \ket{\alpha_2}$, i.e. the first 2 particles occupy the same state. Pair every permutation $\pi$ in the antisymmetrization sum with $\pi'=\pi\circ(12)$. The two permutations produce the same product ket because the exchanged one-particle factors are identical:
	$$  
	\hat P_{\pi'}|\alpha,\alpha,\alpha_3,\ldots,\alpha_N\rangle  
	=\hat P_\pi|\alpha,\alpha,\alpha_3,\ldots,\alpha_N\rangle.  
	$$
	
	Their parities differ by one transposition, so $(-1)^{p(\pi')}=-(-1)^{p(\pi)}.$
	Hence the two terms in every pair cancel:
	
	$$  
	\begin{aligned}
	&(-1)^{p(\pi)}\hat P_\pi|\alpha,\alpha,\alpha_3,\ldots\rangle  
	+(-1)^{p(\pi')}\hat P_{\pi'}|\alpha,\alpha,\alpha_3,\ldots\rangle\\  
	&\qquad=  
	\left[(-1)^{p(\pi)}+(-1)^{p(\pi')}\right]  
	\hat P_\pi|\alpha,\alpha,\alpha_3,\ldots\rangle=0.  
	\end{aligned}  
	$$
	
	Therefore $\hat {\mathfrak{P}}_{F}|\alpha,\alpha,\alpha_3,\ldots,\alpha_N\rangle=0$

Now we evaluate the overlap to normalize it.

To determine the normalization, begin with the overlap of the projected label states:

$$ 
\begin{aligned}
{}_{A/S}^{}\langle\alpha_1',\ldots,\alpha_N'|  
\alpha_1,\ldots,\alpha_N\rangle_{A/S}^{}&=N!\langle\alpha_1',\ldots,\alpha_N'|  
\hat P_{B,F}^2  
|\alpha_1,\ldots,\alpha_N\rangle = \\ 
\\  
&=N!\langle\alpha_1',\ldots,\alpha_N'|  
\hat P_{B,F}  
|\alpha_1,\ldots,\alpha_N\rangle  
\\  
&=\sum_{\alpha\in S_N}  
\langle\alpha_1',\ldots,\alpha_N'|  
\xi^{\alpha}\hat P_\alpha  
|\alpha_1,\ldots,\alpha_N\rangle  
\\
&=\sum_{\alpha\in S_N}  
\xi^{\alpha}  
\prod_{i=1}^N\langle\alpha_i'|\alpha_{\alpha(i)}\rangle =\sum_{\alpha\in S_N}  
\xi^{\alpha}  
\prod_{i=1}^N\langle\alpha_i'|\alpha_{p_i}\rangle.  
\end{aligned}
$$

For orthonormal one-particle orbitals, $\langle\alpha_i'|\alpha_{\alpha(i)}\rangle=\delta_{\alpha_i',\alpha_{\alpha(i)}}$. Therefore the same overlap is

$$  
{}_{A/S}^{}\langle\alpha_1',\ldots,\alpha_N'|  
\alpha_1,\ldots,\alpha_N\rangle_{A/S}^{}  
=\sum_{\pi \in S_N}\xi^{\pi)}  
\prod_{i=1}^N\delta_{\alpha_i',\alpha_{p_i}}  
$$

So we conclude that this overlap is non-zero only if $\alpha_i'=\alpha_{P_i}$ for all $i$, i.e. there exists a permutation

$$  
\hat P_\alpha|\alpha_1,\ldots,\alpha_N\rangle  
=|\alpha_1',\ldots,\alpha_N'\rangle.  
$$

We distinguish two cases.

For fermions, $\alpha_i\neq\alpha_j$ whenever $i\neq j$. If the primed and unprimed lists contain the same occupied orbitals, there is exactly one permutation $P$ that relates them, and

$$  
{}_{A}^{}\langle\alpha_1',\ldots,\alpha_N'|  
\alpha_1,\ldots,\alpha_N\rangle_A^{}  
=(-1)^{\pi} 
$$

For bosons, if an orbital $|\gamma\rangle$ occurs $m_\gamma$ times, permutations among its identical copies do not change the product ket. The number of permutations that preserve all occupied labels is

$$  
\prod_\gamma m_\gamma!,  
$$

where the product is over distinct one-particle orbitals, not over the $N$ slots. Thus

$$
\begin{cases}  
\prod_\gamma m_\gamma!&\text{Bosons, for equal occupation data},\\  
(-1)^\pi&\text{Fermions, for lists related by }P,\\ 
0&\text{otherwise}.  
\end{cases}  
$$

Given these factors, the normalized state is

$$
\begin{aligned}
|\alpha_1,\ldots,\alpha_N\rangle_{A/S}^{\mathrm{norm}}  
&=\frac{1}{\sqrt{\prod_\gamma m_\gamma!}}  
|\alpha_1,\ldots,\alpha_N\rangle_{A/S}^{}=\\  
&=\frac{1}{\sqrt{\prod_\gamma m_\gamma!}}  
\frac{1}{\sqrt{N!}}  
\sum_{\alpha\in S_N}\xi^{p(\alpha)}  
\hat P_\alpha|\alpha_1,\ldots,\alpha_N\rangle = \\
&=\frac{1}{\sqrt{\prod_\gamma m_\gamma!}}  
\frac{1}{\sqrt{N!}}  
\sum_{\alpha\in S_N}\xi^{p(\alpha)}  
|\alpha_{P_1},\ldots,\alpha_{P_N}\rangle.
\end{aligned}
$$

One can then define their representation in the position basis:

$$
\begin{aligned}
\Phi_{\alpha_1,\ldots,\alpha_N}(\bar r_1,\ldots,\bar r_N)  
&\equiv  
\langle\bar r_1,\ldots,\bar r_N|  
\alpha_1,\ldots,\alpha_N\rangle_{A/S}^{\mathrm{norm}}=\\ 
&=\frac{1}{\sqrt{\prod_\gamma m_\gamma!}}  
\frac{1}{\sqrt{N!}}  
\sum_{\alpha\in S_N}\xi^{p(\alpha)}  
\langle\bar r_1,\ldots,\bar r_N|  
\alpha_{P_1},\ldots,\alpha_{P_N}\rangle=\\  
&=\frac{1}{\sqrt{\prod_\gamma m_\gamma!}}  
\frac{1}{\sqrt{N!}}  
\sum_{\alpha\in S_N}\xi^{p(\alpha)}  
\phi_{\alpha_{P_1}}(\bar r_1)\cdots  
\phi_{\alpha_{P_N}}(\bar r_N).  
\end{aligned}
$$

We can write this compactly. Let’s define:

$$  
M=  
\begin{pmatrix}  
\phi_{\alpha_1}(\bar r_1)&\cdots&\phi_{\alpha_1}(\bar r_N)\\  
\vdots&\ddots&\vdots\\  
\phi_{\alpha_N}(\bar r_1)&\cdots&\phi_{\alpha_N}(\bar r_N)  
\end{pmatrix},  \qquad \text{or}\   
M_{ij}=\phi_{\alpha_i}(\bar r_j).  
$$

Then:

$$  
\Phi_{\alpha_1,\ldots,\alpha_N}(\bar r_1,\ldots,\bar r_N)  
=\frac{1}{\sqrt{N!\prod_\gamma m_\gamma!}}  
\begin{cases}  
\operatorname{perm}(M)&\text{Bosons},\\  
\det(M)&\text{Fermions}.  
\end{cases}  
$$

Here $\operatorname{perm}(M)$ is the permanent, while $\det(M)$ is the Slater determinant.