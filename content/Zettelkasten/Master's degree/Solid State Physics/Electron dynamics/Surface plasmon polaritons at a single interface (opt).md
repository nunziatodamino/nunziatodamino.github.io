We begin by remembering what we mean by surface plasmon polaritons.
Surface plasmon polaritons are quasi-particles that represent a collective oscillation of electrons (plasmon) which is induced by photon and polarized (polariton). This oscillation can happen only at the interface of 2 mediums because is rapidly decaying. 

We will see in our analysis that are typical in metals.

![[Images/Pasted image 20230512105746.png|300]]

Given the picture, we choose $x$ as the direction of propagation of the wave. We have 2 possibilities, a TE, or a TM wave.

- TE case:
We show that these plasmons cannot exist, due to violation of the continuity conditions at the interface of the $H$ field.
So the electric field equation is of the form:

$$\bar{E} = 
\begin{cases}
E_1 \hat{y}e^{i(kx-\omega t)} e^{-\alpha_1 z} \qquad z>0 \\
E_2 \hat{y}e^{i(kx-\omega t)} e^{\alpha_2 z} \qquad z<0
\end{cases}
$$

With $\alpha_1, \alpha_2 >0$. These solutions are obtained by solving Helmholtz equation considering this geometry.
If now one tries to obtain the $H$ field by applying the curl on $\bar{E}$ (this is good because in the hypothesis of harmonicity $\nabla \times \bar{E} = i\mu_0\mu_r\omega \bar{H}$), one obtains:

$$\bar{H} = 
\begin{cases}
\frac{1}{i\mu_0\mu_1 \omega}[\alpha_1\hat{x} + ik\hat{z}]E_1e^{i(kx-\omega t)} e^{-\alpha_1 z} \qquad z>0 \\
\frac{1}{i\mu_0\mu_2 \omega}[-\alpha_2\hat{x} + ik\hat{z}]E_2e^{i(kx-\omega t)} e^{\alpha_2 z} \qquad z<0
\end{cases}
$$

Which is impossible, due to the fact that it must be satisfied $\lim_{z \to 0^-}H_{\parallel}=\lim_{z \to 0^+}H_{\parallel}$ so that:

$$ \frac{\alpha_1}{-\alpha_2} = \frac{\mu_1}{\mu_2} $$

Which means that either $\mu_1$ or $\mu_2$ must be negative, condition that isn't fulfilled by any material.


- TM case:
On the contrary these plasmons exists. The $\bar{H}$ field equation is of the form:

$$\bar{H} = 
\begin{cases}
H_1 \hat{y}e^{i(kx-\omega t)} e^{-\alpha_1 z} \qquad z>0 \\
H_2 \hat{y}e^{i(kx-\omega t)} e^{\alpha_2 z} \qquad z<0
\end{cases}
$$

With $\alpha_1, \alpha_2 >0$.,where again these solutions are obtained by solving Helmholtz equation considering this geometry.
Now we evaluate $\bar{E}$ (in the hypothesis of harmonicity $\nabla \times \bar{H} = -i\varepsilon_0\varepsilon_r\omega \bar{E}$), one obtains:

$$\bar{E} = 
\begin{cases}
\frac{1}{i\varepsilon_0\varepsilon_1 \omega}[-\alpha_1\hat{x} - ik\hat{z}]H_1e^{i(kx-\omega t)} e^{-\alpha_1 z} \qquad z>0 \\
\frac{1}{i\varepsilon_0\varepsilon_2 \omega}[\alpha_2\hat{x} - ik\hat{z}]H_2e^{i(kx-\omega t)} e^{\alpha_2 z} \qquad z<0
\end{cases}
$$

Now this is possible only if $\lim_{z \to 0^-}E_{\parallel}=\lim_{z \to 0^+}E_{\parallel}$ which correspond to the condition:

$$ \frac{-\alpha_1}{\alpha_2} = \frac{\varepsilon_1}{\varepsilon_2} $$

Which means that either $\varepsilon_1$ or $\varepsilon_2$ must be negative, condition that is fulfilled in metals.



