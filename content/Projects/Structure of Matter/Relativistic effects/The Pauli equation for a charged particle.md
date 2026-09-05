Let's start from the [[Dirac equation]] for a charged particle

$$
i \hbar \partial_t\Psi = \left[c\hat{\bar\alpha}\cdot(\hat{\bar p}-q\bar A)  
+\hat\beta mc^2  
+q\Phi\right]\Psi   
$$

Where $\Psi=(\Psi_1,\Psi_2,\Psi_3,\Psi_4)^T\in\mathbb{C}^4$.

Let's rearrange $\Psi$:

$$  
\Psi=(\varphi,\eta)^T,  
\qquad  
\varphi=  
\begin{pmatrix}  
\Psi_1 \\  
\Psi_2  
\end{pmatrix},  
\qquad  
\eta=  
\begin{pmatrix}  
\Psi_3 \\  
\Psi_4  
\end{pmatrix}.  
$$

So that we can define

$$  
\Psi=e^{-imc^2t/\hbar}  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}.  
$$

By plugging this in the Dirac equation and, recalling:

$$
\hat{\bar \alpha} = 
\begin{pmatrix}  
0 & \bar \sigma \\  
\bar \sigma & 0 
\end{pmatrix}  

\qquad
\hat{\beta} = 
\begin{pmatrix}  
\mathbb{1}_2 & 0 \\  
0 & -\mathbb{1}_2  
\end{pmatrix}  
$$

We obtain the equation:

$$  
\begin{aligned}  
i\hbar\partial_t  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}  
={}&  
\left[  
\begin{pmatrix}  
0 & c(\bar\sigma\cdot\hat{\bar\pi}) \\  
c(\bar\sigma\cdot\hat{\bar\pi}) & 0  
\end{pmatrix}  
+mc^2(\hat\beta-\mathbb{1}_4)  
+q\Phi\mathbb{1}_4  
\right]  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}.  
\end{aligned}  
$$

Now, given that:

$$\hat\beta-\mathbb{1}_4 = 
\begin{pmatrix}  
\mathbb{1}_2 & 0 \\  
0 & -\mathbb{1}_2  
\end{pmatrix}  - 
\begin{pmatrix}  
\mathbb{1}_2 & 0 \\  
0 & \mathbb{1}_2  
\end{pmatrix} = 
\begin{pmatrix}  
0 & 0 \\  
0 & -2\mathbb{1}_2  
\end{pmatrix}   $$



We obtain:

$$  
\begin{aligned}  
i\hbar\partial_t  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}  
&={}\left[  
\begin{pmatrix}  
0 & c(\bar\sigma\cdot\hat{\bar\pi}) \\  
c(\bar\sigma\cdot\hat{\bar\pi}) & 0  
\end{pmatrix}  
+  
\begin{pmatrix}  
0 & 0 \\  
0 & -2mc^2\mathbb{1}_2  
\end{pmatrix}  
+  
\begin{pmatrix}  
q\Phi\mathbb{1}_2 & 0 \\  
0 & q\Phi\mathbb{1}_2  
\end{pmatrix}  
\right]  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}=\\
&=
\begin{pmatrix}  
q\Phi\mathbb{1}_2 & c\bar\sigma\cdot\hat{\bar\pi} \\  
c\bar\sigma\cdot\hat{\bar\pi} & (q\Phi-2mc^2)\mathbb{1}_2  
\end{pmatrix}  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}.  
\end{aligned}
$$

From this point we can consider the classical limit, the is within the conditions:

$$  
\left|i\hbar\partial_t\eta\right|\ll 2mc^2|\eta|  
\qquad \text{and} \qquad
|q\Phi\eta|\ll 2mc^2|\eta|.  
$$

In this approximation:

$$  
i\hbar  
\begin{pmatrix}  
\partial_t\varphi \\  
\partial_t\eta  
\end{pmatrix}  
\simeq  
i\hbar  
\begin{pmatrix}  
\partial_t\varphi \\  
0  
\end{pmatrix}  
$$

leading to

$$
i\hbar  
\begin{pmatrix}  
\partial_t\varphi \\  
0  
\end{pmatrix}
=
\begin{pmatrix}  
q\Phi\mathbb{1}_2 & c\bar\sigma\cdot\hat{\bar\pi} \\ 
c\bar\sigma\cdot\hat{\bar\pi} & -2mc^2\mathbb{1}_2  
\end{pmatrix}  
\begin{pmatrix}  
\varphi \\  
\eta  
\end{pmatrix}.  
$$

From here one can solve the lower equation trivially:

$$  
\eta=\frac{c,\bar\sigma\cdot\hat{\bar\pi}}{2mc^2}\varphi  
=\frac{\bar\sigma\cdot\hat{\bar\pi}}{2mc}\varphi .  
$$

And then the upper equation by plugging the found $\eta$:

$$i \hbar \partial_t \varphi =
\left[  
\frac{(\bar\sigma\cdot\hat{\bar\pi})^2}{2m}  
+q\Phi  
\right]\varphi .  
$$

Now we can recast this equation in the typical Schroedinger form.
First let's prove: $(\bar\sigma\cdot\bar a)(\bar\sigma\cdot\bar b) =\bar a\cdot\bar b+i\bar\sigma\cdot(\bar a\times\bar b)$ (proof [[Pauli vector dot product identity]])
One can prove that
We have:

$$  
\begin{aligned}  
(\bar\sigma\cdot\hat{\bar\pi})^2  
=(\bar\sigma\cdot\hat{\bar\pi})(\bar\sigma\cdot\hat{\bar\pi})  
  
=\hat{\bar\pi}^2+i\bar\sigma\cdot(\hat{\bar\pi}\times\hat{\bar\pi}).  
\end{aligned}  
$$

Note now that:

$$  
(\hat{\bar\pi}\times\hat{\bar\pi})_k  
=\frac{1}{2}\varepsilon_{ijk}[\hat\pi_j,\hat\pi_k].  
$$

Then, given $[\hat\pi_i,\hat\pi_j]=iq\hbar\varepsilon_{ijh}B_h$ we obtain

$$  
\begin{aligned}  
(\hat{\bar\pi}\times\hat{\bar\pi})_i  
=\frac{1}{2}\varepsilon_{ijk}iq\hbar\varepsilon_{jkl}B_l  
  
=\frac{1}{2}iq\hbar,2\delta_{il}B_l  
  
=iq\hbar B_i.  
\end{aligned}  
$$

Leading to:

$$
i \hbar \partial_t \varphi =
\left(  
\frac{\hat{\bar\pi}^2}{2m}  
+q\Phi  
\right)\varphi  
-\left(\frac{q\hbar}{2m}\bar\sigma\cdot\bar B \right)\varphi .  
$$

If one defines $\hat{\bar S}=\frac{\hbar}{2}\bar\sigma$, $q=-e$:

$$  
i\hbar\partial_t\varphi  
=\hat{\mathscr{H}}_{\mathrm{classic}}\varphi  
+\left(\frac{e}{m}\hat{\bar S}\cdot\bar B \right)\varphi .  
$$

Allowing us to predict that at the classical limit exists of an intrinsic magnetic moment for the electron.
Is possible also to exctract a semiclassical estimation of this magnetic moment, as one can set $\mu_B=\frac{e\hbar}{2m}$, calling it the Bohr magneton.