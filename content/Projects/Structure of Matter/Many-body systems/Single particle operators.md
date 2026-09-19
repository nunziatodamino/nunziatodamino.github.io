In the context of a N-particle system, we define a single particle operator
$$  
\hat U|\alpha_1,\ldots,\alpha_N\rangle  
=\sum_{i=1}^N\hat U_i|\alpha_1,\ldots,\alpha_N\rangle,  
$$
Where

$$  
\hat U_i=\mathbb{1}_1\otimes\cdots\otimes\hat U\otimes\cdots\otimes\mathbb{1}_N.  
$$

Acts on the i-th space.

We have:

$$  
\begin{aligned}  
\langle\alpha_1,\ldots,\alpha_N|\hat U|\beta_1,\ldots,\beta_N\rangle  
&=\langle\alpha_1,\ldots,\alpha_N|  
\sum_i\hat U_i|\beta_1,\ldots,\beta_N\rangle=  
\\  
&=\sum_i\left(  
\prod_{k\neq i}\langle\alpha_k|\beta_k\rangle  
\right)  
\langle\alpha_i|\hat U|\beta_i\rangle.  
\end{aligned}  
$$