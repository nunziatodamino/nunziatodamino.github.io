## Important note

Note that the following proof is not for a generic [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Neural Network|old-style NN]], but for the special case in which we have no bias neurons, just one output neuron in the final layer and no activation function on said neuron.
Something like this:

![[Images/Backpropagation.png|300]]

In this kind of NN, for each layer $\bar{i}^{(t)} = W^{(t)}\bar{o}^{(t-1)}$, and clearly $\bar{o}^{(t)} = \sigma(\bar{i}^{(t)})$, while clearly for the last layer $\bar{i}^{(T)} = \bar{o}^{(T)}$.
### Proof

We begin by defining the loss over a mini-batch:

$$ L_S = \frac{1}{B}\sum_{i=1}^Bl(y_i, o^{(T)}(\bar{x_i})) $$

Given what we said on the last layer: $o^{(T)}(\bar{x_i}) = \bar{w}^{(T)} \cdot \bar{o}^{(T-1)}(\bar{x_i}) \equiv \hat{y}(\bar{x_i})$.
Then, by the chain rule:

$$ \frac{\partial L_S}{\partial \bar{w}^{(T)}} =  \frac{\partial L_S}{\partial \hat{y}(\bar{x_i}) }\frac{\partial \hat{y}(\bar{x_i}) }{\partial \bar{w}^{(T)}} = \frac{1}{B}\sum_{i=1}^B \frac{\partial l(y_i,\hat{y}(\bar{x_i}) )}{\partial \hat{y}(\bar{x_i}) } \bar{o}^{(T-1)}(\bar{x_i})$$

Now we define:

$$ \delta^t =  \frac{\partial L_S}{\partial \bar{i}^{(t)}} $$

Notice that, given that in the last layer $\bar{i}^{(T)} = \bar{o}^{(T)}$:

$$ \delta^T =  \frac{\partial L_S}{\partial \bar{i}^{(T)}} = \frac{1}{B}\sum_{i=1}^B \frac{\partial l(y_i,\hat{y}(\bar{x_i}) )}{\partial \hat{y}(\bar{x_i}) }$$

So that in the end we can write for the last layer (we divide the sum):

$$ \frac{\partial L_S}{\partial \bar{w}^{(T)}} = \delta^T \frac{1}{B}\sum_{i=1}^B o^{(T-1)}(\bar{x_i})$$

Now we try to evaluate the same quantity for a generic layer, considering this time the role of the activation function $\bar{o}^{(t)} = \sigma(\bar{i}^{(t)})$.
For a generic layer we have this time a matrix, not a vector.
Again by the chain rule:

$$ \frac{\partial L_S}{\partial W_{ij}^{(t)}}  = \sum_j\frac{\partial L_S}{\partial \bar{i}_j^{(t)}}  \frac{\partial \bar{i}_j^{(t)}}{\partial W_{ij}^{(t)}} = \delta_j^{(t)} \frac{\partial \bar{i}_j^{(t)}}{\partial W_{ij}^{(t)}}$$

Given than $\bar{i}^{(t)} = W^{(t)}\bar{o}^{(t-1)}$ : 

$$ \frac{\partial L_S}{\partial W_{ij}^{(t)}}  = \delta_j^{(t)} \bar{o}^{(t-1)}_i$$

And moreover we can evaluate $\delta_j^{(t)}$ by observing that $\bar{o}^{(t)} = \sigma(\bar{i}^{(t)})$. so:

$$\delta_j^{(t)} =  \frac{\partial L_S}{\partial \bar{i}_j^{(t)}} = \frac{\partial L_S}{\partial \bar{o}_j^{(t)}} \frac{\partial \bar{o}_j^{(t)}}{\partial \bar{i}_j^{(t)}} = \frac{\partial L_S}{\partial \bar{o}_j^{(t)}}  \sigma(\bar{i}_j^{(t)}) $$
