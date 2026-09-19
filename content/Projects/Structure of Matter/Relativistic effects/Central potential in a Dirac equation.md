For $\bar A=0$ and $V=V(r)$,

$$  
\hat{\mathscr H}_D  
=c\hat{\bar\alpha}\cdot\hat{\bar p}  
+\hat\beta mc^2+V(r).  
$$

The separate orbital $(\hat L)$ and spin $(\hat S)$ angular momenta do not commute with $\hat{\mathscr H}_D$, but their sum $(\hat J = \hat L + \hat S)$ does.
We will prove it here. Let's start by defining

$$  
\hat{\bar L}=\bar r\times\hat{\bar p},  
\qquad
\hat{\bar S}  
=\frac{\hbar}{2}  
\begin{pmatrix}  
\bar\sigma&0_2\\  
0_2&\bar\sigma  
\end{pmatrix} \equiv \frac{\hbar}{2}\bar\Sigma.
$$

- **Orbital angular momentum is not conserved separately**

Given $V(r)$ is central, $[V(r),\hat{\bar L}]=0$. Hence (Using Einstein convention):

$$ 
\begin{aligned}
\left[\hat{\mathscr{H}}_D,\hat L_h\right] &= \left[ c\alpha^i p_i, \epsilon_{\ell mh}r^\ell p^m \right] = c\alpha^i \left[ p_i, \epsilon_{\ell mh}r^\ell p^m \right] = \\ &= c\epsilon_{\ell mh}\alpha^i [p_i,r^\ell]p^m = c\epsilon_{\ell mh}\alpha^i \left( -i\hbar\delta_i^\ell \right)p^m =\\ &= -i\hbar c\, \epsilon_{\ell mh}\alpha^\ell p^m = -i\hbar c \left( \hat{\bar\alpha}\wedge\hat{\bar p} \right)_h
\end{aligned} $$

(We used implicitly $[\beta, r_i] = [\beta, p_i] = [\alpha_i, r_i] = [\alpha_i, p_i] = [p_i, p_j] =0$) Hence:

$$  
\boxed{  
[\hat{\mathscr H}_D,\hat{\bar L}]  
=-i\hbar c\hat{\bar\alpha}\times\hat{\bar p}  
\neq0  
}.  
$$

 - **Spin is not conserved separately**
 
$$ \begin{aligned} 
\left[\hat{\mathscr{H}}_D,S_k\right] &= \left[ c\,\hat{\bar\alpha}\cdot\hat{\bar p} + \hat\beta mc^2, S_k \right] \\ &= c \left[ \alpha^i p_i, \frac{\hbar}{2}\Sigma_k \right] + mc^2 [\hat\beta,S_k]. \end{aligned} $$
Note that $[\hat\beta,S_k]=0$: both matrices are block diagonal, and each block of $\beta$ is proportional to the identity.
Therefore, 

$$ \begin{aligned}{} 
[\hat{\mathscr{H}}_D,S_k] &= \frac{\hbar}{2}c [\alpha^i,\Sigma_k]p_i
=i\hbar c\,\epsilon_{ikj}\alpha_jp_i
=i\hbar c\,(\bar\alpha\wedge\bar p)_k. \end{aligned} $$
Where we used: 

$$ [\alpha^i,\Sigma_k] = \begin{pmatrix} 0 & \sigma_i \\ \sigma_i & 0 \end{pmatrix}\begin{pmatrix} \sigma_k & 0 \\ 0 & \sigma_k \end{pmatrix} -\begin{pmatrix} \sigma_k & 0 \\ 0 & \sigma_k \end{pmatrix}\begin{pmatrix} 0 & \sigma_i \\ \sigma_i & 0 \end{pmatrix} =  \begin{pmatrix} 0&[\sigma_i,\sigma_k]  \\  [\sigma_i,\sigma_k] & 0 \end{pmatrix} = 2i\epsilon_{ikj}\alpha_j $$

one obtains then

$$  
\boxed{  
[\hat{\mathscr H}_D,\hat{\bar S}]  
=i\hbar c\hat{\bar\alpha}\times\hat{\bar p}  
\neq0  
}.  
$$

 - **Conserved total angular momentum**

The two nonzero commutators cancel:

$$  
[\hat{\mathscr H}_D,\hat{\bar L}]  
+[\hat{\mathscr H}_D,\hat{\bar S}]=0.  
$$

Therefore

$$  
\boxed{  
\hat{\bar J}=\hat{\bar L}+\hat{\bar S},  
\qquad  
[\hat{\mathscr H}_D,\hat{\bar J}]=0  
}.  
$$

The operators $\{\hat{\mathscr H}_D,\hat J^2,\hat J_z\}$ commute and have simultaneous eigenstates. For Coulomb bound states, an additional parity label $\pi=\pm1$ completes the labels. Writing $E_{nj}$ for the binding energy:

$$ 
\begin{aligned}
\hat{\mathscr H}_D|n j m_j\pi\rangle &= (mc^2+E_{nj})|n j m_j\pi\rangle \\
\hat J^{2}|n j m_j\pi\rangle
&=\hbar^2j(j+1)|n j m_j\pi\rangle \\
\hat J_z|n j m_j\pi\rangle
&=\hbar m_j|n j m_j\pi\rangle,
\end{aligned}
$$

with $m_j=-j,-j+1,\ldots,j$; these half-integer multiplets do not contain $m_j=0$.

For the point-nucleus Coulomb potential $V(r)=-k_eZe^2/r$, neglecting nuclear recoil, the equation can be solved exactly:

$$E_{nj} = mc^2\left( \frac{1}{\sqrt{1 + \frac{(Z\alpha)^2}{\left(n-j-\frac12 + \sqrt{(j+ \frac12)^2 - (Z\alpha)^2}\right)^2}}} -1\right)$$

With $\alpha$ the fine structure constant and $Z$ the nuclear charge number ($Z=1$ for hydrogen); the formula is used here for $Z\alpha<1$.
