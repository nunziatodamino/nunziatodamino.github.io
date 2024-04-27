The following lemmas are generally used in substitution of the Darboux's lemma as a quick result.

>[!info] **Big circle lemma**
>Hp. Let $\varphi(z)$ be a continuous function in $S = \{ z \in \mathbb{C} : |z|\geq r ; \alpha \leq \arg(z) \leq \beta \}$ with $r \geq 0$ and $0 \leq \alpha < \beta \leq 2 \pi$.
>Let also $\lim_{z \to +\infty} z\varphi(z) = \lambda$. 
>Th. Then:
>$$ \lim_{R\to \infty} \int_{+\Gamma_{R}} \varphi(z) dz = i\lambda(\beta-\alpha)$$
>
>Where $\Gamma_{R} = \{ z \in S : |z|=R \}$


>[!info] **Little circle lemma**
>Hp. Let $z_0 \in \mathbb{C}$ and $\varphi(z)$ be a continuous function in $S = \{ z \in \mathbb{C} : 0\leq|z-z_0|\leq r ; \alpha \leq \arg(z-z_0) \leq \beta \}$ with $r > 0$ and $0 \leq \alpha < \beta \leq 2 \pi$.
>Let also $\lim_{z \to z_0} (z-z_0)\varphi(z) = \lambda$. 
>Th. Then:
>$$ \lim_{\varepsilon \to 0} \int_{+\gamma_{\varepsilon}} \varphi(z) dz = i\lambda(\beta-\alpha)$$
>
>Where $\gamma_{\varepsilon} = \{ z \in S : |z|=\varepsilon \}$


>[!info] **Jordan's lemma**
> Hp. Let $\gamma_R = \{ z(t)=Re^{it}, \ t\in[\alpha,\beta] \}$ be a contour with  $0 \leq \alpha < \beta \leq 2 \pi$. 
>Let also be $\mu \in \mathbb{R}^+$, f(z) a continuous function over $\gamma_R$.
>Th. Then the following estimation is valid:
>$$\left| \int_{\gamma_R}f(z)e^{i\mu z} dz \right| \leq \frac{\pi}{\mu} \max_{\gamma_{R}} |f(z)|$$



