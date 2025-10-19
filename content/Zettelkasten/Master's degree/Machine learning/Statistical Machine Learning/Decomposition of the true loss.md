### First decomposition : approximation and estimation error

Consider $S =(z_i) \sim D^m$ , an hypothesis class $H$ and a loss function $l$.
Let's consider as always the empirical loss $L_S(h) = \frac{1}{m} \sum l(h, z_i)$ and the true loss $L_D(h) = \mathbb{E}_{z \sim D} l(h, z)$.
We have that for the **learner hypothesis** is valid the following decomposition 

$$ L_D(h_S) = \varepsilon_{\text{app}} + \varepsilon_{\text{est}} $$

- We call $\varepsilon_{\text{app}}$ **approximation error** and is defined as:

$$ \varepsilon_{\text{app}} = \min_{h\in H} L_D(h)$$

Is the minimum risk achievable by a predictor in the hypothesis class.
This depends **only** on the hypothesis class $H$ (and underlying distribution $D$), so it should stay the same if we change training set.
To decrease it we need a larger hypothesis class (larger the class, higher the possibility to achieve a minimum).
Can be made $0$ in case of realizability (even though in practice this happens rarely)

- We call $\varepsilon_{\text{est}}$ **estimation error** and is defined as:

$$ \varepsilon_{\text{est}} = L_D(h_S) - \min_{h\in H} L_D(h)$$

 This is error is due to the fact that in general the learner's hypothesis is different from the best possible hypothesis in the chosen class.
 It depends on the training set an its size, but also on the hypothesis class
 This is why, to decrease it we need a smaller hypothesis class (smaller the class, smaller the possibility to make a mismatch)

![[Images/Decomposition of the true loss.png|400]]

Note that in general, given that $D$ is unknown, the estimation error is unknown, so one can only achieve some empirical method to find the minimum within a certain bound with a certain probability

### **Bias-Complexity tradeoff**

- Increasing $H$ → ↓ approximation error, but ↑ estimation error (risk of overfitting).
- Decreasing $H$ → ↑ approximation error, but ↓ estimation error (risk of underfitting).
- The art is balancing the two for the given $m$ and problem.

### Second decomposition : training, validation and true loss

We can write the following decomposition:

$$ L_D(h_S) = (L_D(h_S) - L_V(h_S)) + (L_V(h_S) - L_S(h_S)) + L_S(h_S) $$

The first bracket is the difference between the true error and the validation error.
This error is guaranteed to be bounded by the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Estimation of the true error - bounds on the validation set error|Estimation of the true error - bounds on the validation set error]]
