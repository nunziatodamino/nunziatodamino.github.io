
>[!info] **Multidimensional Gaussian integral**
>Let $\bar{x} \in \mathbb{R}^n$ and $A$ be a square matrix of order n, symmetric and positive definite (i.e. its eigenvalues are strictly positive). The multidimensional Gaussian integral is defined as:
>$$ Z[A] = \int_{\mathbb{R}^n} d^n x \ \exp{\left(-\frac{1}{2} \bar{x}^tA\bar{x}\right)}= \sqrt{\frac{(2\pi)^n}{\det A}} $$
>For a proof see [[multidimensional_gaussian.pdf|here]]

Furthermore, it is possible to further generalize it by considering a translation :

>[!info] **Multidimensional translated Gaussian integral**
>Let $\bar{x}, \bar{b} \in \mathbb{R}^n$ and $A$ be a square matrix of order n, symmetric and positive definite (i.e. its eigenvalues are strictly positive).  The multidimensional translated Gaussian integral is defined as:
>$$ Z[A, \bar{b}] = \int_{\mathbb{R}^n} d^n x \ \exp{\left(-\frac{1}{2} \bar{x}^tA\bar{x} + \bar{x}^t \cdot \bar{b}\right)} = Z[A, 0] \exp\left( \frac{1}{2} \bar{b}^tA^{-1}\bar{b} \right) $$
>For a proof see [[translated_multidimensional_gaussian.pdf|here]]
