
>[!info] Finite hypothesis classes are agnostic PAC learnable
> Let $H$ be a finite hypothesis class, let $Z$ be a domain, and let $\ell: H \times Z \to \mathbb{R}^+$ be a loss function.
>
> 1. $H$ enjoys the uniform convergence property, with sample complexity
>    $$
>    m_H^{\mathrm{UC}}(\varepsilon,\delta)
>    \le \left\lceil \frac{\log\!\left(\tfrac{2|H|}{\delta}\right)}{2\varepsilon^2} \right\rceil.
>    $$
>
> 2. $H$ is agnostic PAC learnable using ERM, with sample complexity
>    $$
>    m_H(\varepsilon,\delta) \le m_H^{\mathrm{UC}}(\frac{\varepsilon}{2},\delta) \le
>    \left\lceil \frac{2\,\log\!\left(\tfrac{2|H|}{\delta}\right)}{\varepsilon^2} \right\rceil.
>    $$

## Proof

Let's begin by proving 1.
The idea is to prove that the class $H$ has the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Uniform convergence and PAC learnability|uniform convergence]] property, i.e. $\Pr_{S\sim D^m}\! \left[ \forall h \in H : \big|L_S(h)-L_D(h)\big|\le \varepsilon\ \right]\ \ge\ 1-\delta\quad\text{whenever } m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta)$, or equivalently its converse:

$$\Pr_{S\sim D^m}\! \left[ \exists h \in H : \big|L_S(h)-L_D(h)\big|> \varepsilon\ \right]\ <\delta\quad\text{whenever } m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta)$$

So that if we can prove this we prove UC.
By the union bound lemma:

$$ \Pr_{S\sim D^m}\! \left[ \exists h \in H : \big|L_S(h)-L_D(h)\big|> \varepsilon\ \right] \le \sum_{h \in H}\Pr_{S\sim D^m}\! \left[ \big|L_S(h)-L_D(h)\big|> \varepsilon\ \right] $$

Now we use the so called :

> [!info] **Hoeffding’s inequality**
> Let $\,\theta_1,\ldots,\theta_m\,$ be i.i.d. random variables with $\mathbb{E}[\theta_i]=\mu$ and bounded a.s. in $[a,b]$ (i.e., $\mathbb{P}(a\le \theta_i \le b)=1$). For any $\varepsilon>0$,
>
> $$\mathbb{P}\!\left(\left|\frac{1}{m}\sum_{i=1}^{m}\theta_i-\mu\right|>\varepsilon\right)\ \le\ 2\exp\!\left(-\frac{2m\varepsilon^{2}}{(b-a)^{2}}\right).$$

By choosing as $\vartheta_i = l(h,z_i)$ we obtain by definition the ERM loss as $L_S(h) = \frac{1}{m}\sum_i l(h, z_i)$ and by definition of true loss $L_D(h) = \mathbb{E}[l(h,z_i)]$.

So we have

$$ 
\begin{aligned}
\Pr_{S\sim D^m}\! \left[ \exists h \in H : \big|L_S(h)-L_D(h)\big|> \varepsilon\ \right] &\le \sum_{h \in H}\Pr_{S\sim D^m}\! \left[ \big|L_S(h)-L_D(h)\big|> \varepsilon\ \right] \leq \\
& \leq \sum_{h \in H} 2e^{-2m\varepsilon^2} = 2|H|e^{-2m\varepsilon^2}
\end{aligned}
$$

We now observe the following. The number $2|H|e^{-2m\varepsilon^2}$ can be made $0$ in the limit $m \to +\infty$ (infinite data). This imply that for any $\delta > 0$ there exists a sample size such that the probability from which we started can be bounded up to $\delta$:

$$2|H|e^{-2m\varepsilon^2} < \delta$$

This imply that equivalently, in order to have this bound the sample size must be:

$$2|H|e^{-2m\varepsilon^2} < \delta \iff m > \frac{1}{2\varepsilon^2} \ln\left( \frac{2 |H|}{\delta} \right) =m_{\text{Threshold}} $$

Now, given that we started with the complement proposition, the conclusion we derive is the converse. So:

$$m_h^{UC} \le m_{\text{Threshold}} = \frac{1}{2\varepsilon^2} \ln\left( \frac{2 |H|} {\delta}\right)$$

Which completes the proof of 1.
For the proof of 2. we already seen in [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Uniform convergence and PAC learnability|Uniform convergence and PAC learnability]] that if $H$ has the UC then is agnostically PAC learnable with sample complexity

$$m_H(2\varepsilon,\delta)\ \le\ m_H^{\mathrm{UC}}(\varepsilon,\delta)$$

So, by simple substitution :

$$ m_H(\varepsilon,\delta) \le m_H^{\mathrm{UC}}(\frac{\varepsilon}{2},\delta) \le
 \left\lceil \frac{2\,\log\!\left(\tfrac{2|H|}{\delta}\right)}{\varepsilon^2} \right\rceil.
   $$
   