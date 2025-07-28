We recall that the canonical partition function is defined as:

$$
\mathcal{Z}_N = \frac{1}{N!\,h^{3N}}
\int_{\Gamma} \prod_{\alpha=1}^N d\bar{q}^\alpha \prod_{\alpha=1}^N d\bar{p}_\alpha\  e^{-\beta\,\mathscr{H}(\bar{p}_\alpha,\bar{q}^\alpha)} \equiv \frac{1}{N!\,h^{3N}}
\int_{\Gamma} dqdp\  e^{-\beta\,\mathscr{H}(q,p)}
$$

Where we used a simplified notation to simplify all the further calculation.
Given that $\mathscr{H}(q,p) = K(p)+ U(q)$ the following decomposition can be made (consider $\Gamma = \Gamma_q \cup \Gamma_p$) :

$$
\mathcal{Z}_N = \frac{1}{N!\,h^{3N}}
\int_{\Gamma_p} \prod_{\alpha=1}^N d\bar{p}_\alpha e^{-\beta K(\bar{p}_\alpha)}\int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha e^{-\beta U(\bar{q}^\alpha)} \equiv \mathcal{T_N} \mathcal{Q_N}
$$

We call $\mathcal{T_N}$ kinetic partition function and $\mathcal{Q_N}$ configurational partition function.
Note that will the configurational part depends on the choice of the potential and is system dependent, the kinetic part can be readily evaluated, as $K(\bar{p}_\alpha) = \sum_{i=1}^N \frac{p_{i}^2}{2m_i}$:

$$ 
\begin{aligned}
\mathcal{T_N} &= \frac{1}{N!\,h^{3N}}
\int_{\Gamma_p} \prod_{\alpha=1}^N d\bar{p}_\alpha e^{-\beta K(\bar{p}_\alpha)} =   \frac{1}{N!\,h^{3N}}
\int_{\Gamma_p} \prod_{\alpha=1}^N d\bar{p}_\alpha e^{-\beta \sum_{i=1}^N \frac{p_{i}^2}{2m_i}} = \\ 

&=\frac{1}{N!\,h^{3N}}\int_{\Gamma_p} \prod_{\alpha=1}^N d\bar{p}_\alpha \prod_{i=1}^Ne^{-\beta \frac{p_{i}^2}{2m_i}} =\frac{1}{N!\,h^{3N}}\int_{\Gamma_p} \prod_{i=1}^N d\bar{p}_i \prod_{i=1}^Ne^{-\beta \frac{p_{i}^2}{2m_i}} =\\
&= \frac{1}{N!\,h^{3N}}\int_{\Gamma_p} \prod_{i=1}^N d\bar{p}_i e^{-\beta \frac{p_{i}^2}{2m_i}} = \frac{1}{N!\,h^{3N}}\prod_{i=1}^N \int_{\mathbb{R^3}}  d\bar{p}_i e^{-\beta \frac{p_{i}^2}{2m_i}} = \\
&=  \frac{1}{N!\,h^{3N}} \left( \int_{\mathbb{R^3}}  d\bar{p}_i e^{-\beta \frac{p_{i}^2}{2m}}\right)^N
\end{aligned}
$$

Note that we used the property $\left( \prod_{i=1}^N n_i \right) \left( \prod_{i=1}^N m_i \right) = \prod_{i=1}^N (n_i m_i)$.
We assume in the last line for simplicity that the masses are equal for all particles, but the ansatz for different masses is straightforward. Note now that $\Gamma_p = (-\infty,+\infty) \times \dots \times (-\infty,+\infty)$, as each particle can assume any momentum value.
Then we have a standard [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Gaussian integrals|Gaussian integral]] in 3D ($\int_{\mathbb{R}^3} dxdydz\ e^{-r^2} = \int_{\mathbb{R}} dx\ e^{-x^2} \int_{\mathbb{R}} dy\ e^{-y^2} \int_{\mathbb{R}} dz\ e^{-z^2}$), so in the end:

$$ \mathcal{T_N} = \frac{1}{N!\,h^{3N}} \left( \frac{2m\pi}{\beta} \right)^{3N/2} \equiv \frac{1}{N!\Lambda^{3N}} \qquad \Lambda \equiv \sqrt{\frac{h^2}{2\pi k_BT m}} $$

**Where we call $\Lambda$ the thermal De Broglie wavelength.**

In the end one has:

$$ \mathcal{Z}_N =  \frac{1}{N!\Lambda^{3N}} \mathcal{Q}_N $$

This decomposition is important when one wants to evaluate the free energy of the system:

$$ F_N = -\frac{1}{\beta}\ln\mathcal{Z}_N \iff F_N = k_BT\ln N! + 3Nk_BT\ln\Lambda - k_BT \ln \mathcal{Q}_N$$

Now notice the following. Suppose to have an ideal gas. Then $U(q) = 0$ and consequently $\mathcal{Q}_N=\int_{\Gamma_q} \prod_{\alpha=1}^N d\bar{q}^\alpha = V^N$, so that one can write:

$$F_N^{\text{ideal gas}} \equiv k_BT\ln N! + 3Nk_BT\ln\Lambda - Nk_BT\ln V $$

Usually one redefines the configurational part:

$$ \mathcal{Q}_N = V^N \frac{1}{V^N}\mathcal{Q}_N \equiv V^N \chi_N $$

So that one can write more elegantly:

$$ F_N = F_N^{\text{ideal gas}} - k_BT \ln\chi_N$$

**Note that this is Physics of Matter, and confusion is guaranteed by construction**: one can call configurational partition function either $\mathcal{Q}_n$ or $\chi_n$, moreover the more spicy people call all these quantities simply partition functions and label them with $\mathcal{Z}_n$. So caution and relaxation are advised.

Then, in general for a system, its free energy is equal to 

$$F_N = k_BT\ln N! + 3Nk_BT\ln\Lambda - k_BT \ln \mathcal{Q}_N$$

or :

$$ F_N = F_N^{\text{ideal gas}} - k_BT \ln\chi_N$$