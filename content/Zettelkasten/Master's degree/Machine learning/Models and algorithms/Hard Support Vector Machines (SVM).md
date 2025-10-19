Consider $X = \mathbb{R}^d$ and $Y= \{-1,1\}$.
Consider also a set of data $(\bar{x}_i, y_i)_{i=1}^m \sim D^m$ that are linearly separable by an [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/The halfspace hypothesis class|hyperplane]] (we are assuming that we are under realizability).
A formal way to write this is that exists $(\bar{w}, b)$ such that $y_i = \braket{\bar{w}, \bar{x}} +b$, or another way:

$$ \forall i \in [m] : y_i(\braket{\bar{w}, \bar{x}}+b) >0 $$

Where $[m]$ is the set of the indices from $1$ to $m$.
There are many [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Empirical risk minimization (ERM)|ERM]] rules that fit the data. What one should choose ?
One criterion can be the one dictated by the so-called margin.

![[Images/Hard Support Vector Machines (SVM).png|400]]

Given an ERM rule consider the minimum distance from the hyperplane to any data point. Then one can argue that the hyperplane with the largest margin separates better the data, as it is has more wiggle room for more additional data eventually.

Margin is defined as follows: given $L$ the hyperplane : $L= \{ \bar{v} : \braket{\bar{w},\bar{v}} +b = 0 \}$ then clearly the margin is:

$$\gamma = (S, \bar{w}, b) = \min_{\bar{x} \in S} d(\bar{x}, L) = \min_{\bar{x} \in S}\min_{\bar{v} \in L}\{||\bar{x} - \bar{v}|| : \bar{v} \in L, \bar{x} \in S\} $$

Where with $d(\bar{x}, L)$ we consider the distance between a point $\bar{x}$ and the hyperplane $L$
We prove then the following:

>[!info] **Distance theorem for halfspaces**
>Given $L$ the hyperplane : $L= \{ \bar{v} : \braket{\bar{w},\bar{v}} +b = 0 \}$ and the distance $d(\bar{x}, L) = \min_{\bar{v}\in L}\{||\bar{x} - \bar{v}|| : \bar{v} \in L, \bar{x} \in S\}$, we can show that if $||\bar{w}|| = 1$ then:
>
>$$ d(\bar{x}, L) = ||\braket{\bar{w},\bar{x}} +b\ || $$

### Proof

We begin by choosing $\bar{v} = \bar{x}-(\braket{w,\bar{x}} + b)\bar{w}$
Is this vector in L ? The check is easy:

$$\braket{\bar{w},\bar{v}} +b = 0 \iff \braket{\bar{w},\bar{x}-(\braket{w,\bar{x}} + b)\bar{w}} +b = (\braket{w,\bar{x}} + b) - \braket{\bar{w},\bar{w}}(\braket{w,\bar{x}} + b)  =  0$$

As $\bar{w}$ is a unit vector and $(\braket{w,\bar{x}} + b)$ is a scalar.
Then if we evaluate the distance from a generic point:

$$ ||\bar{x} - \bar{v}||  = ||\braket{\bar{w},\bar{x}} +b\ || $$

In order to prove the theorem we need to prove that this is the minimum of the margin set, i.e. for any $\bar{u}$ in the hyperplane : $||\bar{x} - \bar{u}|| \geq ||\bar{x} - \bar{v}||$.
This can be proven by the following chain. Chosen any $\bar{u}$ in the hyperplane ($\bar{u} : \braket{\bar{w}, \bar {u}} +b = 0$):

$$
\begin{aligned}
||\bar{x} - \bar{u}||^2 &= ||\bar{x} - \bar{v} + \bar{v} - \bar{u}||^2 = ||\bar{x} - \bar{v}||^2 + ||\bar{v} - \bar{u}||^2 + 2 \braket{\bar{x} - \bar{v}, \bar{v} - \bar{u}} \geq \\
&\geq ||\bar{x} - \bar{v}||^2 + 2 \braket{\bar{x} - \bar{v}, \bar{v} - \bar{u}} = \\
&=||\bar{x} - \bar{v}||^2 + 2 \braket{(\braket{w,\bar{x}} + b)\bar{w}, \bar{v} - \bar{u}} = \\
&=||\bar{x} - \bar{v}||^2 + 2 (\braket{w,\bar{x}} + b)\braket{\bar{w}, \bar{v} - \bar{u}}= \\
&=||\bar{x} - \bar{v}||^2 + 2 (\braket{w,\bar{x}} + b)[\braket{\bar{w}, \bar{v}} - \braket{\bar{w}, \bar{u}}]= \\
&=||\bar{x} - \bar{v}||^2
\end{aligned}
$$

First inequality is valid because just the member before is bigger than the latter. Note that in the last line we used the fact that both $\bar{v}$ and $\bar{u}$ lies on the hyperplane, so $\braket{\bar{w}, \bar {v}} =-b$ and $\braket{\bar{w}, \bar {u}} =-b$.

A simple corollary of this theorem is that this permits us to rewrite the margin as:

>[!info] **Corollary to the distance theorem**
>The margin can be rewritten as:
>
$$ \gamma = (S, \bar{w}, b) = \min_{\bar{x} \in S} ||\braket{\bar{w},\bar{x}} +b\ || = \min_{i \in [m]} ||\braket{\bar{w},\bar{x}_i} +b\ || $$

## Hard-SVM rule

So the Hard-SVM rule will be the one that given a training set maximizes the margin:

$$ 
\DeclareMathOperator*{\argmax}{\arg\max}
h_{\text{Hard-SVM}} = \argmax_{(\bar{w},b):|\bar{w}| = 1}\  \gamma(S,\bar{w},b) = \argmax_{(\bar{w},b):|\bar{w}| = 1}\  \min_{i \in [m]} ||\braket{\bar{w},\bar{x}_i} +b\ || \quad \text{s.t.} \ y_i(\braket{\bar{w}, \bar{x}}+b) >0, \ \forall(\bar{x}_i, y_i)\in S
$$

This optimization problem can be mapped in another easier one (left unproven), leading to the equivalent rule:

$$ 
\DeclareMathOperator*{\argmax}{\arg\max}
h_{\text{Hard-SVM}} = \argmax_{(\bar{w},b):|\bar{w}| = 1}\  \min_{i \in [m]} y_i(\braket{\bar{w}, \bar{x}}+b) 
$$

But in theory we use a third rule, also this left unproven, that is a convex optimization problem:

![[Images/Hard Support Vector Machines (SVM)-1.png|400]]

### The homogeneous case

The homogeneous version takes the bias inside the weight vector, we have:

$$
\bar{w}_0 = \min_{\bar{w}}||\bar{w}||^2 \quad \text{s.t.} \forall i\  y_i(\braket{\bar{w}, \bar{x}}+b) >1$$

Note that here, given that the minimum exists unique, we can drop the argmin.
