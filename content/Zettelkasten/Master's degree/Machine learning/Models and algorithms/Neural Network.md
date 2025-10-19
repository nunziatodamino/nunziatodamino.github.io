## Formal description

A neural network is an acyclic directed graph, containing the elements (or architecture):

$$ G(V,E,\bar{w}, \sigma) $$

Where:

- $V$ is the set of neurons.
- $E \subseteq V \times V$ is the set of all possible connection between neurons (edges)
- $\bar{w} : E \to \mathbb{R}$ is called a weight function and assign a number to each edge
- $\sigma : \mathbb{R} \to \mathbb{R}$ is called activation function and modifies the input of a neuron.

### Feedforward NN

Suppose to organize the neurons in layers, i.e. neurons are in disjoint sets:

$$ V = \bigcup_{t=1}^T V_t \qquad V_t \ \cap V_{t'} = \emptyset, \ \forall t, t'  $$

And connection can be only between consecutive layers.
Also the graph is fully connected, i.e. given a neuron in a layer (excluding the bias), this neuron is connected to each neuron of the layer before.
Imagine then to have a neuron $v$, and to consider its input $i_v$ and its output $o_v$.

![[Images/Neural Network-1.png|300]]

The input in the neuron is the weighted sum of all the output of the previous layer, i.e. all the neurons $u$ connected to $v$:

$$ i_v = \sum_{u \in V: (u,v)\in E}\ w_{v,u}o_u $$

Then to obtain the output we use the activation function:

$$ o_v = \sigma(i_v) $$

## An example of FNN traversal (old-style NN)

Consider an old-style FNN : in each layer minus the last one we add a bias neuron of value $1$. Bias neurons do not interact between themselves
In the picture there is a 5-4-6-2 neurons FNN (4 layers) in this style:

![[Images/Neural Network.png|500]]

We define for each layer pair:

$$ (W^{(t)})_{ij}\ ^{i\in|V_t|} _{j\in|V_{t-1}|+1}$$

I.e. a weight matrix where $i$ is the **target** neuron, while $j$ is the **source** neuron.
In this way $t$ indicates the **target layer**.
We explore the traversal of this particular network.
#### First to second layer:

- We start with the output (sometimes called input of the network) $\bar{o}^{(1)} = (1, \bar{z})^t = (1, z_1, z_2, \dots, z_5)^t$ 
- Then we can evaluate the input of the second layer by : $\bar{i}^{(2)} = W^{(2)}\bar{o}^{(1)}$
- Then the reduced output $\bar{o^*}^{(2)} = \sigma(\bar{i}^{(2)})$
- Then augment the reduced output for the next step: $\bar{o}^{(2)} = (1, \bar{o^*}^{(2)})$
#### Second to third layer

Is the same ansatz. We start with $\bar{o}^{(2)}$, evaluate $\bar{i}^{(3)} = W^{(3)}\bar{o}^{(2)}$, then activate $\bar{o^*}^{(3)} = \sigma(\bar{i}^{(3)})$ and extend $\bar{o}^{(3)} = (1, \bar{o^*}^{(3)})$
#### Final pass

We either stop before or after activation, depends on the problem.

### All at once

If we define the augmentation operation as $\bar{o}^{(t)} = A(\bar{o^*}^{(t)})$, then for each layer minus the last one:

$$\bar{o}^{(t)} = A(\sigma(W^{(t)}\bar{o}^{(t-1)}))$$

While for the last there is no augmentation:

$$\bar{o}^{(T)} = \sigma(W^{(T)}\bar{o}^{(T-1)})$$

Then the network can be expressed by recursion:

$$\bar o^{(T)}=\sigma\!\Big(W^{(T)}A\!\big(\sigma\!\big(W^{(T-1)}A(\cdots A(\sigma(W^{(2)}A(\bar z)))\cdots)\big)\big)\Big)$$
