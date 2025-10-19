In practice the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Older notes/Clarification on the formal model of statistical learning framework|formal loss definition]]:

$$ L_{D,f}(h) = \mathbb{P}(h(x)\neq f(x)) = D(x:h(x)\neq f(x)) $$

Is useless, because it implicitly assumes that we know the true classifier $f$ and the distribution $D$, rendering the learning problem meaningless.
In practice what is done it to test the prediction over the training data, to see if it matches with the original label.
So one can define the training error:

$$ L_{S}(h) = \frac{\sum_{i=1}^m |h(x_i)-y_i|}{m}\qquad (x_i,y_i)\in S, m=\text{card}(S)$$

This learning paradigm – coming up with a predictor $h$ that minimizes $L_{S}(h)$ – is called Empirical Risk Minimization or ERM for short.

**Note that this works only for a 0-1 labeling**, has to be generalized for the use with other binary labels 