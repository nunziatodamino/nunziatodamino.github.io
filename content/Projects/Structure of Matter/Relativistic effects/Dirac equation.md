Given the problems found in the [[The Klein-Gordon equation]], we would like to fix them by constructing a linear Hamiltonian operator that squared reproduces the mass-shell relation:

$$  
E^2=c^2 p^{2}+m^2c^4,  
$$

So we propose an Hamiltonian linear in momentum,

$$  
\hat{\mathscr H}_D  
=c\hat{\bar\alpha}\cdot\hat{\bar p}  
+\hat\beta mc^2.  
$$

Where $\hat{\bar\alpha}$ and $\hat \beta$ are operators yet to be determined.
Requiring $\hat{\mathscr H}_D^{2}=c^2\hat{\bar p}^{,2}+m^2c^4$ gives:

$$  
\begin{aligned}  
E^2  
={}&\hat\beta^2m^2c^4  
+mc^3\hat\beta\left(\hat{\bar\alpha}\cdot\bar p\right)  
+mc^3\left(\hat{\bar\alpha}\cdot\bar p\right)\hat\beta  
+c^2\left(\hat{\bar\alpha}\cdot\bar p\right)^2  
\\  
={}&\hat\beta^2m^2c^4  
+mc^3\sum_i\{\hat\beta,\hat\alpha_ip_i\}  
+c^2\sum_{i,j}\hat\alpha_ip_i\hat\alpha_jp_j.  
\end{aligned}  
$$

Now we use the fact that the operators to be determined operate on a different space respect the momentum:

$$  
[\hat\alpha_i,\hat p_i]=0,  
\qquad  
[\hat\beta,\hat p_i]=0.  
$$

So that we can write:

$$  
\begin{aligned}  
E^2    
={}&\hat\beta^2m^2c^4  
+mc^3\sum_i\{\hat\beta,\hat\alpha_i\}p_i  
+c^2\sum_{i,j}\hat\alpha_i\hat\alpha_jp_ip_j.  
\end{aligned}  
$$

Finally, one can show:
$$  
\begin{aligned}  
\sum_{i,j}\hat\alpha_i p_i\hat\alpha_jp_j  
&=\hat\alpha_1^2p_1^2+\hat\alpha_2^2p_2^2+\hat\alpha_3^2p_3^2 + 
\\  
&+\hat\alpha_1\hat\alpha_2p_1p_2  
+\hat\alpha_2\hat\alpha_1p_2p_1 + 
\\  
&+\hat\alpha_1\hat\alpha_3p_1p_3  
+\hat\alpha_3\hat\alpha_1p_3p_1  +
\\ 
&+\hat\alpha_2\hat\alpha_3p_2p_3  
+\hat\alpha_3\hat\alpha_2p_3p_2  =
\\  
={}&\sum_i\hat\alpha_i^2p_i^2  
+\sum_{i< j}\{\hat\alpha_i,\hat\alpha_j\}p_ip_j.  
\end{aligned}  
$$

So that in the end one can write:

$$  
\begin{aligned}  
m^2c^4+\hat{\bar p}^{2}c^2  
={}&\hat\beta^2m^2c^4  
+mc^3\sum_i\{\hat\beta,\hat\alpha_i\}\hat p_i +  
\\  
&+c^2\left(  
\sum_i\hat\alpha_i^2\hat p_i^2  
+\sum_{i<j}\{\hat\alpha_i,\hat\alpha_j\}\hat p_i\hat p_j  
\right).  
\end{aligned}  
$$

In order to both sides to be equal we must set:

$$  
\{\hat\alpha_i,\hat\alpha_j\}  
=2\delta_{ij}\mathbb 1_4 \qquad 
\{\hat\alpha_i,\hat\beta\}=0,  
\qquad  
\hat\beta^2=\mathbb 1_4.  
$$

There is no unique solution in choosing the operators, yet we require at least $N\geq 4$ components for the wavefunction.

A common one is the Dirac representation:

$$ \boxed{  
\hat\alpha_i=  
\begin{pmatrix}  
0_2&\sigma_i\\  
\sigma_i&0_2  
\end{pmatrix},  
\qquad  
\hat\beta=  
\begin{pmatrix}  
\mathbb 1_2&0_2\\  
0_2&-\mathbb 1_2  
\end{pmatrix}}  
$$

Where $\sigma_i$ are the [[Pauli matrices]].
The free Dirac equation is 

$$  
\boxed{
i\hbar\partial_t\Psi  
=\left(  
c\hat{\bar\alpha}\cdot\hat{\bar p}  
+\hat\beta mc^2  
\right)\Psi,  
\qquad  
\Psi\in\mathbb C^4}  
$$

### Additional considerations

The equation can be specialized in the case of the [[Dirac equation for a charged particle|charged particle]] (of course like any motion equation).

This equation solves the probability density problem in the [[The Klein-Gordon equation]]
Like we prove in [[Conserved density and current for the Dirac equation]] for :

$$  
\rho=\Psi^\dagger\Psi,  
\qquad  
\bar j=c\Psi^\dagger\hat{\bar\alpha}\Psi.  
$$

The probability density $\rho$ is non-negative.
ALso the equation can be specialized for the stationary case (see [[Stationary equation of a charged particle]]) or for a central potential (see [[Central potential in a Dirac equation]] )
