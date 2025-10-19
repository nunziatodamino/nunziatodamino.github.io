> [!theorem] Fundamental theorem of PAC learning (binary $0$–$1$ loss)
> Let $\mathcal{X}$ be an instance space, $\mathcal{Y}=\{0,1\}$, and let a hypothesis class $H\subseteq \mathcal{Y}^{\mathcal{X}}$.
> For $z=(x,y)\in\mathcal{X}\times\mathcal{Y}$ define the $0$–$1$ loss $\ell(h,z)=\mathbf{1}\{h(x)\neq y\}$.
> For a distribution $D$ on $\mathcal{X}\times\mathcal{Y}$ and a sample $S=(z_1,\dots,z_m)\sim D^m$, set
>
> $$
> L_D(h)=\mathbb{E}_{z\sim D}\,[\ell(h,z)],\qquad
> L_S(h)=\frac{1}{m}\sum_{i=1}^m \ell(h,z_i).
> $$
>
> An ERM rule is any map $\mathcal{A}$ with $\mathcal{A}(S)\in\arg\min_{h\in H} L_S(h)$ (ties arbitrary).
>
> **TFAE:**
>
> 1. $H$ has **uniform convergence**: there exists $m_H^{\mathrm{UC}}(\varepsilon,\delta)$ s.t. for all $D$ and all $m\ge m_H^{\mathrm{UC}}(\varepsilon,\delta)$,
>    $$
>    \Pr_{S\sim D^m}\!\left[\sup_{h\in H}\big|L_S(h)-L_D(h)\big|\le \varepsilon\right]\ge 1-\delta.
>    $$
>
> 2. **Any ERM** is an **agnostic PAC** learner for $H$: there exists $m_H^{\mathrm{agn}}(\varepsilon,\delta)$ s.t. for all $D$ and all $m\ge m_H^{\mathrm{agn}}(\varepsilon,\delta)$,
>    $$
>    \Pr_{S\sim D^m}\!\left[L_D\big(\mathcal{A}(S)\big)\le \inf_{h\in H}L_D(h)+\varepsilon\right]\ge 1-\delta.
>    $$
>
> 3. $H$ is **agnostic PAC learnable** (i.e., there exists some learner achieving the guarantee in 2).
>
> 4. $H$ is **PAC learnable in the realizable case**: there exists $m_H^{\mathrm{real}}(\varepsilon,\delta)$ s.t. for every $D$ realizable by $H$ (i.e., $\exists h^\star\in H$ with $L_D(h^\star)=0$) and all $m\ge m_H^{\mathrm{real}}(\varepsilon,\delta)$, there exists a learner $\mathcal{A}$ with
>    $$
>    \Pr_{S\sim D^m}\!\left[L_D\big(\mathcal{A}(S)\big)\le \varepsilon\right]\ge 1-\delta.
>    $$
>
> 5. **Any ERM** is a successful **realizable PAC** learner for $H$ (i.e., the same guarantee as in 4 holds for every ERM rule).
>
> 6. $H$ has **finite VC dimension**: $\mathrm{VCdim}(H)<\infty$.
>
> **Moreover (rates).** If $d=\mathrm{VCdim}(H)<\infty)$, the optimal sample complexities (up to constants) satisfy
> $$
> m_{\mathrm{agn}}(\varepsilon,\delta)=\Theta\!\left(\frac{d\log(1/\varepsilon)+\log(1/\delta)}{\varepsilon^{2}}\right),\qquad
> m_{\mathrm{real}}(\varepsilon,\delta)=\Theta\!\left(\frac{d\log(1/\varepsilon)+\log(1/\delta)}{\varepsilon}\right).
> $$
