We will treat here the case only of the n-type semiconductor ($N_a =0$) so that the [[Projects/Solid State Physics/Semiconductors/Charge neutrality in a doped semiconductor|Charge neutrality condition]] becomes:

$$ n =p + N_d - n_d^0  $$

First we neglect $p$ respect to $N_d - n_d^0=n_d^+$, i.e. we consider $n_d^+\gg p$, the the number density of the ionized donors (and thus the relative electrons) is much greater than the number density of the holes.

Then, in order to find $n$ we use the [[Projects/Solid State Physics/Semiconductors/Population of impurity levels in thermal equilibrium in a semiconductor|expression]] we already found for $n_d^0$:

$$ n^0_d  = \frac{ N_d}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}  $$

And obtain:

$$ n \simeq n_d^+ = N_d - n_d^0 = N_d \left[1- \frac{ 1}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}\right] = N_d \left[\frac{ \frac{1}{2}e^{\beta(E_d-\mu )}}{\frac{1}{2}e^{\beta(E_d-\mu )}+1}\right] =n_d^0\left[\frac{1}{2}e^{\beta(E_d-\mu )} \right] = (N_d-n)\left[\frac{1}{2}e^{\beta(E_d-\mu )} \right]  $$

Where in the last line we used the charge neutrality expression.
Now we use the expression found [[Projects/Solid State Physics/Semiconductors/Specific evaluations of the law of mass action for an homogeneous semiconductor|here]] :

$$ n = N^c_{\text{eff}}e^{-\beta(E_c-\mu )}\iff \frac{n}{N^c_{\text{eff}}}e^{\beta E_c} = e^{\beta \mu} \qquad N^c_{\text{eff}} = 2\left( \frac{m_e^*k_BT}{2 \pi \hbar^2} \right)^{\frac{3}{2}} $$

So that we can rewrite:

$$ n \simeq (N_d-n)\frac{N^c_{\text{eff}}}{n}\left[\frac{1}{2}e^{-\beta(E_c-E_d )} \right] \iff \frac{n^2}{N^c_{\text{eff}}} \left[\frac{1}{2}e^{\beta(E_c-E_d )} \right] + n \simeq N_d  $$

In this way we find a quadratic expression and can solve for $n$ to find:

$$\begin{aligned}
n &\simeq N^c_{\text{eff}} \frac{- 1 +\sqrt{{1}+2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}}}{e^{\beta(E_c-E_d )}} \frac{1 +\sqrt{{1}+2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}}  }{1 +\sqrt{{1}+2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}} } = \frac{2N^c_{\text{eff}}\frac{N_d}{N^c_{\text{eff}} }e^{\beta(E_c-E_d )}  }{e^{\beta(E_c-E_d )}\left[1 +\sqrt{{1}+2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}} \right]} \simeq

\\ &\simeq \frac{2 N_d }{1 +\sqrt{{1}+2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}} }    
\end{aligned}
$$

Now we distinguish various temperatures regimes.
### Low T (Extrinsic ionization regime)

This regime is determined by the condition:

$$ 2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )} \gg 1\ \iff E_c-E_d\gg k_BT $$

In this condition :

$$ n \simeq \frac{2 N_d }{\sqrt{2\frac{N_d}{N^c_{\text{eff}}} e^{\beta(E_c-E_d )}} } \simeq \sqrt{\frac{N_dN^c_{\text{eff}}}{2}}e^{-\frac{\beta}{2}(E_c-E_d)} $$


And then rewrite the expression as:

$$ n^2 \simeq N_d\left[\frac{1}{2}e^{\beta(E_d-\mu )} \right]N^c_{\text{eff}}e^{-\beta(E_c-\mu )} \iff n \simeq \sqrt{\frac{N_dN^c_{\text{eff}}}{2}}e^{-\frac{\beta}{2}(E_c-E_d)} $$
