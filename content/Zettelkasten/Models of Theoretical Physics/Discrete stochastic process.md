We begin by give its definition: 

>[!info] **Discrete stochastic process**
> A discrete stochastic process is a sequence of random variables $\{ X_t \}_{t \in I}$ where the index is usually interpreted as time.

In the case in which the random variables are 1-dimensional an useful geometrical interpretation can be given. By plotting the outcomes of the r.v. on the y-axis and the indexes in the x-axis, we obtain a sort of path, each of one different according to the value of the random variables. 
==So that one can see a stochastic process as a collection of paths.==

### General consideration

A stochastic process is completely described if one is able to evaluate the following joint probability:

$$ \mathbb{P}(x_0t_0;x_1t_1;\dots;x_nt_n) $$

With $n=\text{card}(I)-1$. The aforementioned probability indicates what is the probability to find the first random variable with value $x_1$ at time $t_1$, the second random variable with value $x_2$ at time $t_2$, and so on. 
Now, by utilizing the conditional probability definition $\mathbb{P}(A|B)=\frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}$, we can rewrite the joint probability as:

$$ \mathbb{P}(x_0t_0;x_1t_1;\dots;x_nt_n) = \mathbb{P}(x_nt_n|x_{n-1}t_{n-1};\dots ;x_0t_0)\mathbb{P}(x_0t_0;x_1t_1;\dots;x_{n-1}t_{n-1}) $$

And again reiterate the process until one reaches the initial condition:

$$ \mathbb{P}(x_0t_0;x_1t_1;\dots;x_nt_n) = \mathbb{P}(x_nt_n|x_{n-1}t_{n-1};\dots ;x_0t_0)\mathbb{P}(x_0t_0;x_1t_1;\dots;x_{n-1}t_{n-1}) = $$

$$ = \mathbb{P}(x_nt_n|x_{n-1}t_{n-1};\dots ;x_0t_0)\mathbb{P}(x_{n-1}t_{n-1}|x_{n-2}t_{n-2};\dots ;x_0t_0)\mathbb{P}(x_0t_0;x_1t_1;\dots;x_{n-2}t_{n-2}) = $$

$$ = \dots $$

Leading to a quite intractable problem without further considerations.