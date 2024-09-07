This is an extension of the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie Theory - Multipolar expansion]] and the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Gans Theory]], where we want to evaluate the plasmonic response of a generic shaped object.
The idea is simple but effective: we treat the generic shaped object as composed by interacting spheres for which is valid the dipolar approximation.

![[Pasted image 20230603164541.png|600]]

In order to derive the theory, we begin by assigning a position vector $\bar{r}_j$ , $j=1,2, \dots, N$ to each dipole.
Furthermore for each dipole we consider a polarizability of :

$$ \alpha_j =  3V_j\frac{\varepsilon_j-1}{\varepsilon_j+2} $$

Result that we have derived in Mie theory. $\varepsilon_j$ can be chosen as the dielectric function of the metal, or can be corrected with an effective version using [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Effective medium approximation (EMA)|Maxwell-Garnett theory]].

We consider then an incident electric field:

$$ \bar{E}_{inc}(\bar{r}) = \bar{E}_0 \exp[i(\bar{k} \cdot \bar{r}- \omega t)] $$

This will produce for each sphere a polarization vector:

$$ \bar{P}_j  = \alpha_j \bar{E}_{scattered,j}$$

Where have, for each dipole a scattered field (the equivalent of the near-field in Mie theory), as:

$$ \bar{E}_{scattered} \equiv \bar{E}_j = \bar{E}_{inc}(\bar{r}_j) - \sum_{l \neq j}A_{(jl)}\bar{P}_l$$

(N.B. we use the notation $A_{(jl) }$ because this is a matrix, not the component of a matrix )
Where the matrix $A_{(jl)}$ is defined such as:

$$ A_{(jl)} = 
\begin{cases}
\frac{\exp(ikr_{jl})}{r_{jl}} \left[ k^2(\hat{r}_{jl}\hat{r}_{jl}-\mathbb{1}) +   \frac{ikr_{jl}-1}{r^2_{jl}}(3\hat{r}_{jl}\hat{r}_{jl}-\mathbb{1})\right] \qquad j \neq l \\
\frac{\mathbb{1}}{\alpha_j} \qquad j = l \\
\end{cases} $$

Where we consider:

$$ r_{jl} = | \bar{r}_j-\bar{r}_l | \qquad \hat{r}_{jl} = \frac{\bar{r}_j-\bar{r}_l}{| \bar{r}_j-\bar{r}_l | } \qquad k = \frac{\omega}{c} $$

Note that every element $A_{(jl)}$ should by a 3x3 matrix, so that, when we consider $\hat{r}_{jl}\hat{r}_{jl}$ we are considering the matrix product of two vectors of size $(3,1)$ and $(1,3)$. We wrote the expression following the convention of the paper, but in reality one should write properly $\hat{r}_{jl}\hat{r}_{jl}^{t}$ where we adopt the convention that vectors are column matrices.
More formally then:

$$ A_{(jl)} = 
\begin{cases}
\frac{\exp(ikr_{jl})}{r_{jl}} \left[ k^2(\hat{r}_{jl}\hat{r}_{jl}^{T}-\mathbb{1}) +   \frac{ikr_{jl}-1}{r^2_{jl}}(3\hat{r}_{jl}\hat{r}_{jl}^{T}-\mathbb{1})\right] \qquad j \neq l \\
\frac{\mathbb{1}}{\alpha_j} \qquad j = l \\
\end{cases} $$

Note that, with this definition:

$$ \sum_{k=1}^N A_{(jk)}\bar{P}_k = \bar{E}_{inc}(\bar{r}_j)$$

Let's prove it briefly:

$$ \sum_{k=1}^N A_{(jk)}\bar{P}_k = \sum_{k=j} A_{(jk)}\bar{P}_k + \sum_{k\neq j} A_{(jk)}\bar{P}_k =  \frac{\bar{P}_j}{\alpha_j}+ \sum_{k\neq j} A_{(jk)}\bar{P}_k =  $$

$$ =  \left(\bar{E}_{inc}(\bar{r}_j) - \sum_{k\neq j} A_{(jk)}\bar{P}_k\right)+ \sum_{k\neq j} A_{(jk)}\bar{P}_k = \bar{E}_{inc}(\bar{r}_j) $$

This equation can then be used to evaluate each polarization vector $\bar{P}_k$, so that in the end we can evaluate the extinction cross section and the total cross section with the following:

![[Pasted image 20230705163703.png|400]]

Where the asterisk represent the complex conjugate operator.
Also is possible to obtain the total scattered field:

![[Pasted image 20230705163902.png|400]]
