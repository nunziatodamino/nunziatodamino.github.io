Suppose to have a system behaving like the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/Hopfield model]], and suppose that the number of patterns is proportional to the number of neurons.
Then by letting $N \to +\infty$ then also the number of patterns will diverge. Given that the $\xi_i^{\mu}$ are iid, then the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Central limit theorem]] holds, then we can affirm that the that the $J_{ij}$ coefficients will have a Gaussian probability density function:

$$ P(J_{ij}) = \sqrt{\frac{N}{2 \pi \delta ^2}}e^{-\frac{N}{2\delta^2}(J_{ij})^2} $$

With zero mean (no ferromagnetism) and variance $\sigma^2_{J}=\braket{J}^2 = \frac{\delta^2}{N}$ 