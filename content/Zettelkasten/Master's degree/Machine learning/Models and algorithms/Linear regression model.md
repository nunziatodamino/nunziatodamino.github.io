**Setup**:
- Domain : $X = \mathbb{R^d}$ and $Y = \mathbb{R}$
- Hypothesis class is the space of [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/The halfspace hypothesis class|affine functions]], i.e. :

$$ H_{reg} = L_d=\{\,h_{\bar{w},b}:\ \bar{w}\in\mathbb{R}^d,\ b\in\mathbb{R}\,\},$$

Or in another way :

$$H_{reg} = \{ h_{\bar{w},b}: \bar{x} \to \braket{\bar{w},\bar{x}}+b\  |\ \bar{w}\in\mathbb{R}^d,\ b\in\mathbb{R}\ \}$$

We observe a training data set $(\bar{x}_i, y_i)_{i=1}^m \sim D^m$.
We define as our loss function $l : Y \times Y \to \mathbb{R}^+$ the so called squared loss:

$$ l(h(\bar{x}), y) = (\braket{\bar{w},\bar{x}}+b -y)^2 $$

The definition of true and empirical risk follow by definition:

$$
L_D(h)=\mathbb{E}_{(x,y)\sim D}\!\left[(\braket{\bar{w},\bar{x}}+b -y)^2\right] \qquad L_S(h)=\frac{1}{m}\sum_{i=1}^m (\braket{\bar{w},\bar{x}_i}+b -y_i)^2
$$

By using a squared loss the empirical risk is sometimes called mean squared error (MSE)