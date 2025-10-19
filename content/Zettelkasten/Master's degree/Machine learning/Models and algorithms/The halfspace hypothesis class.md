 First, we define the class of affine functions as

> [!info] **Definition (Affine functions)**
> $$L_d=\{\,h_{\bar{w},b}:\ \bar{w}\in\mathbb{R}^d,\ b\in\mathbb{R}\,\},$$
> 
> where
> 
> $$h_{\bar{w},b}(\bar{x})=\langle\bar{w},\bar{x}\rangle+b=\left(\sum_{i=1}^{d} w_i x_i\right)+b.$$

It will be convenient also to use the notation

$$L_d=\{\,\bar{x}\mapsto \langle\bar{w},\bar{x}\rangle+b:\ \bar{w}\in\mathbb{R}^d,\ b\in\mathbb{R}\,\}.$$

which reads as follows: $L_d$ is a set of functions, where each function is parameterized by $\bar{w}\in\mathbb{R}^d$ and $b\in\mathbb{R}$, and each such function takes as input a vector $\bar{x}$ and returns as output the scalar $\langle\bar{w},\bar{x}\rangle+b$.

The different hypothesis classes of linear predictors are compositions of a function $\phi:\mathbb{R}\to\mathcal{Y}$ on $L_d$. For example, in binary classification, we can choose $\phi$ to be the sign function, and for regression problems, where $\mathcal{Y}=\mathbb{R}$, $\phi$ is simply the identity function.

It may be more convenient to incorporate $b$, called the bias, into $\bar{w}$ as an extra coordinate and add an extra coordinate with a value of $1$ to all $\bar{x}\in\mathcal{X}$; namely, let $\bar{w}'=(b,w_1,w_2,\ldots,w_d)\in\mathbb{R}^{d+1}$ and let $\bar{x}'=(1,x_1,x_2,\ldots,x_d)\in\mathbb{R}^{d+1}$. Therefore,

$$h_{\bar{w},b}(\bar{x})=\langle\bar{w},\bar{x}\rangle+b=\langle\bar{w}',\bar{x}'\rangle.$$

It follows that each affine function in $\mathbb{R}^d$ can be rewritten as a homogenous linear function in $\mathbb{R}^{d+1}$ applied over the transformation that appends the constant $1$ to each input vector. Therefore, whenever it simplifies the presentation, we will omit the bias term and refer to $L_d$ as the class of homogenous linear functions of the form $h_{\bar{w}}(\bar{x})=\langle\bar{w},\bar{x}\rangle$.


> [!info] **Definition (Halfspaces)**
> The first hypothesis class we consider is the class of halfspaces, designed for binary classification problems, namely, $\mathcal{X}=\mathbb{R}^d$ and $\mathcal{Y}=\{-1,+1\}$. The class of halfspaces is defined as follows:
> 
> $$HS_d=\operatorname{sign}\circ L_d=\{\,\bar{x}\mapsto \operatorname{sign}(h_{\bar{w},b}(\bar{x})):\ h_{\bar{w},b}\in L_d\,\}.$$

In other words, each halfspace hypothesis in $HS_d$ is parameterized by $\bar{w}\in\mathbb{R}^d$ and $b\in\mathbb{R}$ and upon receiving a vector $\bar{x}$ the hypothesis returns the label $\operatorname{sign}(\langle\bar{w},\bar{x}\rangle+b)$.
