Let's take the non-normalized [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Time correlation and auto-correlation functions|Time correlation and auto-correlation functions]], so simply put, the [[Zettelkasten/Master's degree/Probability and Statistics/Covariance|Covariance]] at different times for an observable $O$

$$\begin{aligned}
C_{O}(t) &= \text{Cov}(O(t+t'),O(t)) = \mathbb{E}\left[ (O(t+t')-\mathbb{E}(O))- (O(t)-\mathbb{E} (O) \right] = \\
&=\int ds\  [ (O(s+t')-\mathbb{E}(O))  (O(s)-\mathbb{E}(O))] =\\ 
&=\int ds\  [O(s+t')\langle O(s)] -\mathbb{E}(O)^2 = \mathbb{E}[O(s+t')\langle O(s)] -\mathbb{E}(O)^2
\end{aligned}
$$

Supposing that $ds$ is a probability measure.
Is possible to show that :

$$ C_O(t) \sim \exp\left(-\frac{t}{\tau^O_{\text{exp}}}\right) $$

Where we call $\tau^O_{\text{exp}}$ **exponential auto-correlation time**. This can be found by an exponential fit. 
Note that one can also define:

$$ \tau^O_{\text{int}} = \frac{1}{2} + \int dt' \frac{C(t')}{C(0)} $$

Which is called **integrated auto-correlation time**. The factor $1/2$ is conventional and is chosen so that $\tau^O_{\text{exp}} \sim \tau^O_{\text{int}}$.
Note that it can be proven that, in general $\tau^O_{\text{int}} \leq \tau^O_{\text{exp}}$.

Given these considerations, one usually does not distinguish between the 2, and can choose to evaluate the one or the other, with the caveat that the exponential auto-correlation time result in an overestimation due to the aforementioned inequality.

### Discrete series
In discrete series the integrals become summations:

$$ C_{O}(t) = \sum_{s = \tau_{eq}}^{t_{max}}[O(s+t') O(s) -\mathbb{E}(O)^2] = \sum_{s = \tau_{eq}}^{t_{max}}  \left[O(s+t') O(s) - \frac{1}{t_{max}-\tau_{eq}} \sum_{s'' = \tau_{eq}}^{t_{max}}(O(s''))^2\right] $$

$$ \tau^O_{\text{int}} = \frac{1}{2} + \sum_{t'=1}^{t_{max}} \frac{C(t')}{C(0)} $$

For the auto-correlation function numerical evaluation, given that we assumed that the process is stationary ($\mathbb{E}(O(t)) =\mathbb{E}(O(t')) \equiv \mathbb{E}(O), \forall t,t'$), is better to evaluate the mean before the calculation and use the first expression instead of the second, to save computation time.
Moreover this result is not normalized and prone to numerical instability, so it's advisable to use a library function e.g. for Python `from statsmodels.tsa.stattools import acf`
