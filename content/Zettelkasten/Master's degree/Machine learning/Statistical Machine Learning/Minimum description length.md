Let $H$ be a countable hypothesis class. Then, we can write $H$ as a countable union of singleton classes, namely, $H = \cup_n \{h_n\}$.
Given that each singleton is a finite class, by the theorem [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Finite hypothesis classes are agnostic PAC learnable|Finite hypothesis classes are agnostic PAC learnable]] each singleton has UC and sample complexity **at most**:

$$m_H^{\mathrm{UC}}(\varepsilon,\delta)
= \left[ \frac{\log\!\left(\tfrac{2}{\delta}\right)}{2\varepsilon^2} \right]
\iff \varepsilon = \sqrt{\frac{\log\left( \frac{2}{\delta} \right)}{2m}} $$

So we have for each singleton $\varepsilon_n(m,\delta) = \sqrt{\frac{\log\left( \frac{2}{\delta} \right)}{2m}}$ so our [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Structural risk minimization (SRM)|SRM hypothesis]] will be:

$$ h_{\text{SRM}} = \arg\!\min_{h\in H} \left[ L_S(h) +\varepsilon_{n(h)}(m, w(n(h))\delta) \right] = \arg\!\min_{h\in H} \left[ L_S(h) + \sqrt{\frac{\log\left( \frac{2}{w(n)\delta} \right)}{2m}} \right]  $$

Given that each hypothesis lives in a singleton the minimum procedure is irrelevant.
Is better to separate in the penalty contribution the weighting function from the confidence:

$$ h_{\text{SRM}} = \arg\!\min_{h\in H} \left[ L_S(h) +\varepsilon_{n(h)}(m, w(n(h))\delta) \right] = \arg\!\min_{h\in H} \left[ L_S(h) + \sqrt{\frac{ -\log(w(h)) +\log\left( \frac{2}{\delta} \right)}{2m}} \right]  $$

The only thing that remains is to understand what weighting function to use.
If we use as a weighting function $w(h) = 2^{-|h|}$, upon consideration made [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Prefix-free strings (optional)]], and after considering that $-\ln(2^{-|h|}) = \ln (2)|h| \leq |h|$ as any string in the set $\{0,1\}^*$ is at least long 2, we can write the SRM hypothesis as:

$$ h_{\text{SRM}} =  \arg\!\min_{h\in H} \left[ L_S(h) + \sqrt{\frac{ |h| +\log\left( \frac{2}{\delta} \right)}{2m}} \right]  $$

This is a summary of the paradigm:

![[Images/Minimum description length.png]]