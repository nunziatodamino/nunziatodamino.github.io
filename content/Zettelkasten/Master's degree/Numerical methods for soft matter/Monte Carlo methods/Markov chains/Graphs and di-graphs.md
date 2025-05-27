We begin with the definitions:

>[!info] **Definition - Graph (undirected graph)**
>We define graph the ordered pair $G=(V,E)$ where:
>  - $V$ is a set, whose elements are called vertices or nodes,
>  - $E$ is a set of pairs (unordered) of distinct vertices, called edges or lines


>[!info] **Definition - Digraph or di-graph (directed graph)**
>We define graph the ordered pair $G=(V,E)$ where:
>  - $V$ is a set, whose elements are called vertices or nodes,
>  - $E$ is a set of pairs (**ordered**) of distinct vertices, called edges or lines

Both graphs and di-graphs admits a graphical representation:

![[Images/Graphs and di-graphs.png]]

### Association of a square matrix to a digraph

It's always possible to associate a square matrix of order $m \times m$ to a digraph with $m$ nodes.
One associate to every element $a_{ij}$ the correspondent edge in set $E$.
One obtains something like this:

![[Images/Graphs and di-graphs-1.png|500]]

Of course we are using this in the context of [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Markov process|Markov's processes]], so in our case we are associating to a digraph a [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Stochastic matrix|Stochastic matrix]]. 
