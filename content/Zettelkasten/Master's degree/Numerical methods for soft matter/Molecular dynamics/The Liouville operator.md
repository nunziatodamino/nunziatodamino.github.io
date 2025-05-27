>[!info] **The Liouville operator**
>We define :
>
>$$ i\hat{L} \equiv \sum_{\alpha = 1}^N \frac{\partial H}{\partial p_{\alpha}}\frac{\partial }{\partial q^{\alpha}} - \frac{\partial H}{\partial q^{\alpha}}\frac{\partial }{\partial p_{\alpha}} $$
>
>Note that this operator is strictly related to the Poisson brackets.

#### Liouville operator decomposition

We can write:

$$ i\hat{L} = i\hat{L}_1 + i\hat{L}_2 $$

Where

$$ i\hat{L}_1 \equiv  \sum_{\alpha = 1}^N \frac{\partial H}{\partial p_{\alpha}}\frac{\partial }{\partial q^{\alpha}} = \sum_{\alpha = 1}^N \dot{q}^{\alpha}\frac{\partial }{\partial q^{\alpha}} \qquad i\hat{L}_2 \equiv - \sum_{\alpha = 1}^N  \frac{\partial H}{\partial q^{\alpha}}\frac{\partial }{\partial p_{\alpha}} = \sum_{\alpha = 1}^N \dot{p}_{\alpha}\frac{\partial }{\partial p_{\alpha}} $$

One can prove that, for a generic function $g(q^{\alpha}, p_{\alpha})$ the 2 operators do not commute:

$$ [i\hat{L}_1, i\hat{L}_2] \neq 0 $$


