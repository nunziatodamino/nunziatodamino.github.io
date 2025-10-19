The expressive power of [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/The halfspace hypothesis class|halfspaces]] is rather restricted – for example, many data cannot be linearly separated.
In order to circumvent this we can imagine to transform the data using an embedding 

$$ \psi : X \to F $$

Where $F$ is in general an Hilbert space that can coincide or not with $\mathbb{R}^s$.
The general idea is that we trade dimensions for the possibility to linearly separate the data, i.e. a set $S$ can be not linearly separable in dimension $d$, but after the embedding is transformed in a set $S'$ that is linearly separable in dimension, say $d+d'$.

The basic paradigm is as follows:

1. Given some domain set $\mathcal{X}$ and a learning task, choose a mapping $\psi : \mathcal{X} \to \mathcal{F}$, for some feature space $\mathcal{F}$, that will usually be $\mathbb{R}^n$ for some $n$ (however, the range of such a mapping can be any Hilbert space, including such spaces of infinite dimension).
2. Given a sequence of labeled examples, $S = ((\bar{x}_1, y_1), \ldots, (\bar{x}_m, y_m))$, create the image sequence $\hat{S} = ((\psi(\bar{x}_1), y_1), \ldots, (\psi(\bar{x}_m), y_m))$.
3. Train a linear predictor $h$ over $\hat{S}$.
4. Predict the label of a test point, $\bar{x}$, to be $h(\psi(\bar{x}))$.

Note that, for every probability distribution $\mathcal{D}$ over $\mathcal{X} \times \mathcal{Y}$, we can readily define its image probability distribution $\mathcal{D}^{\psi}$ over $\mathcal{F} \times \mathcal{Y}$ by setting, for every subset $A \subseteq \mathcal{F} \times \mathcal{Y}$,

$$
\mathcal{D}^{\psi}(A) = \mathcal{D}\!\left(\psi^{-1}(A)\right)
$$

It follows that for every predictor $h$ over the feature space,

$$
L_{\mathcal{D}^{\psi}}(h) = L_{\mathcal{D}}(h \circ \psi)
$$

where $h \circ \psi$ is the composition of $h$ onto $\psi$.

While this solve the problem apparently, in reality it puts it on the embedding: the evaluation (and finding) of the embedding on the data can be more computationally expensive than the linear regression itself.
It seems that we are back at square one.
But what we are able to the regression without knowing and using the embedding but just the data? This is what we can see in the [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Kernel trick|Kernel trick]]
