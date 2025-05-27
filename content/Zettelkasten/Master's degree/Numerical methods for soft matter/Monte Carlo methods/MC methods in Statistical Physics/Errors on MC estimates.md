We have shown that each MC estimate [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Efficiency of the direct sampling Monte Carlo method|has an error]]:

$$ \text{Est}[\braket{O}_\rho] = \bar{O}_N \pm \frac{\sigma(O)}{\sqrt{N}} $$

The 2 most simple ways to estimate the error $\frac{\sigma(O)}{\sqrt{N}}$ are the following:
### Uncorrelated data

Suppose we are in a situation in which each sample is uncorrelated (e.g. in an integral estimate). In this case we can estimate the variance as:

$$ \sigma_N^2(O) = \frac{1}{N-1} \sum_{t=1}^{N}(O_t - \bar{O}_N)^2 $$

In general $N = t_{max} - t_{eq}$ as we usually discard $t_{eq}$ for equilibration. In this case we obtain for the error:

$$ \varepsilon_{{O}_{t_{max} - t_{eq}}} = \frac{\sigma_{t_{max} - t_{eq}}(O)}{\sqrt{t_{max} - t_{eq}}} = \sqrt{\frac{1}{(t_{max} - t_{eq})(t_{max} - t_{eq}-1)} \sum_{t=t_{eq}}^{t_{max}}(O_t - \bar{O}_{t_{max} - t_{eq}})^2} $$

For high $t_{max}-t_{eq}$ this can be simplified:

$$ \varepsilon_{{O}_{t_{max} - t_{eq}}} \simeq   \frac{1}{(t_{max} - t_{eq})} \sum_{t=t_{eq}}^{t_{max}}\sqrt{(O_t - \bar{O}_{t_{max} - t_{eq}})^2} $$

Note that in languages like Python , the straightforward implementation of this is not optimized, and one should use the `numpy` library instead:

````Python
import numpy as np

error = np.sqrt(np.var(observable[t_eq:t_max]) / (t_max - t_eq))
````

### Correlated data

Suppose we are in a situation in which each sample is correlated (e.g. sample production trough a Markov chain). In this case we have first to evaluate the auto-correlation time $\tau$ of the time series, and observe that we have uncorrelated measures once every $N/2\tau$ steps.
So we have to correct the variance:

$$^{\text{corr}}\sigma_N^2(O) = \frac{\sigma_N^2(O)}{\frac{N}{2\tau}}$$

In this way we obtain an error:

$$ ^{\text{corr}}\varepsilon_{{O}_{t_{max} - t_{eq}}} \simeq   \sqrt{\frac{2\tau}{(t_{max} - t_{eq})^{3}}} \sum_{t=t_{eq}}^{t_{max}}\sqrt{(O_t - \bar{O}_{t_{max} - t_{eq}})^2} $$

Also here, is easier to implement this with an intermediate step

````Python
import numpy as np

uncorr_step = (t_max - t_eq) / (2 * autocorr_time)
var_corr = np.var(observable[t_eq:t_max]) / uncorr_step
error = np.sqrt(var_corr / (t_max - t_eq))
````
