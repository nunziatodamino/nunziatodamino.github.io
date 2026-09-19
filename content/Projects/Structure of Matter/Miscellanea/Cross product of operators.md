We show that (Einstein summation convention implied):

$$  
(\hat{\bar\pi}\times\hat{\bar\pi})_k  
=\frac{1}{2}\varepsilon_{ijk}[\hat\pi^i,\hat\pi^j].  
$$

- **Proof** : Given any product of operators, this can be written as the sum of the symmetric and antysimmetric parts:

$$ \hat\pi_i \hat\pi_j = \frac12 [\hat\pi_i ,\hat\pi_j] + \frac12 \{\hat\pi_i ,\hat\pi_j\}$$

Then by applying the Levi-Civita symbol and summing over:

$$\sum_{ij}\varepsilon_{ijk} \hat\pi_i \hat\pi_j = \sum_{ij}\varepsilon_{ijk}\frac12 [\hat\pi_i ,\hat\pi_j] + \sum_{ij}\varepsilon_{ijk}\frac12 \{\hat\pi_i ,\hat\pi_j\}$$

The LHS is by definition $(\hat{\bar\pi}\times\hat{\bar\pi})_k$.
In The RHS the second term is 0, as antisimmetric terms have opposite Levi-Civita symbols signs.
In the end

$$\sum_{ij}\varepsilon_{ijk} \hat\pi_i \hat\pi_j = \sum_{ij}\varepsilon_{ijk}\frac12 [\hat\pi_i ,\hat\pi_j] $$

Or using the Einstein summation convention

$$  
(\hat{\bar\pi}\times\hat{\bar\pi})_k = \varepsilon_{ijk}\hat\pi^i\hat\pi^j 
=\frac{1}{2}\varepsilon_{ijk}[\hat\pi^i,\hat\pi^j].  
$$