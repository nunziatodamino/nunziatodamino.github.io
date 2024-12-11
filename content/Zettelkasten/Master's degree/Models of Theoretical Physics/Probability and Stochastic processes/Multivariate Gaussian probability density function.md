One can consider the following probability density function associated to the random variable vector $\bar{x}=(x_1,x_2,\dots x_n)$ as an extension of the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Gaussian probability density function]]:

>[!info] **Multivariate Gaussian pdf**
>$$ p_{\bar{X}}(\bar{x})=\frac{1}{Z[A,\bar{0}]}\exp\left( -\frac{1}{2}\bar{x}^t A \bar{x} \right) $$


Note that one can evaluate the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Characteristic function]] of this pdf by using the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Multidimensional Gaussian integrals]], specifically by using the translated multidimensional Gaussian integral with $\bar{b}=i\bar{k}$
We then obtain:

>[!info] **Characteristic function of the multivariate Gaussian**
>$$ \varphi(\bar{k}) = \braket{e^{i\bar{k}\cdot\bar{x}}}= \exp\left( \frac{1}{2} (i\bar{k})^tA^{-1}(i\bar{k}) \right)= \exp\left( -\frac{1}{2} \bar{k}^tA^{-1}\bar{k} \right) $$

One can give an explicit meaning to the matrix $A^{-1}$ using the concept of [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/s-point correlation functions]].
If we evaluate the 2-point correlation function in a multivariate Gaussian pdf, we obtain:

$$ \braket{x_ix_j}=(-i)^2\left[\partial_{k_i}\partial_{k_j}\varphi(\bar{k})\right]_{\bar{k}=\bar{0}}=-\left[\partial_{k_i}\partial_{k_j}\exp\left( -\frac{1}{2} \bar{k}^tA^{-1}\bar{k} \right)\right]_{\bar{k}=\bar{0}}=-\left[\partial_{k_i}\partial_{k_j}\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}= $$

$$=-\partial_{k_i}\left[\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}(k_l\delta_{mj}+\delta_{lj}k_m) \right)\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}=$$

$$=-\partial_{k_i}\left[-\frac{1}{2}\left(  \sum_lA^{-1}_{lj}k_l+\sum_mA^{-1}_{jm}k_m \right)\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}=$$

$$=-\partial_{k_i}\left[-\frac{1}{2}\left( 2 \sum_lA^{-1}_{lj}k_l \right)\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}=$$

$$=-\partial_{k_i}\left[-\left( \sum_lA^{-1}_{lj}k_l \right)\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}=$$

$$=\left[\left( \sum_lA^{-1}_{lj}\delta_{li} \right)\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)+\left( \sum_lA^{-1}_{lj}k_l \right)^2\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}}  =$$


$$=\left[A^{-1}_{ij}\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)+\left( \sum_lA^{-1}_{lj}k_l \right)^2\exp\left( -\frac{1}{2} \sum_l\sum_mA^{-1}_{lm}k_lk_m \right)\right]_{\bar{k}=\bar{0}} = A^{-1}_{ij} $$

In the derivation we implicitly used the fact that $A^{-1}$ is symmetric.
So that we can imply the fundamental 

$$ \braket{x_ix_j} =  A^{-1}_{ij} $$


==So that the $A^{-1}$ matrix is the 2-point correlation function between a pair of Gaussian random variables==
According to this result we say that if $A^{-1}$ is diagonal, the variables are uncorrelated
==The matrix $A^{-1}$ is also known as the covariance matrix.==
