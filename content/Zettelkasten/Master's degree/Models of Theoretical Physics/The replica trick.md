Suppose we are in the context of [[Zettelkasten/Master's degree/Models of Theoretical Physics/The Sherrington-Kirkpatrick (S-K) model]] and after the proper consideration on [[Zettelkasten/Master's degree/Models of Theoretical Physics/The concept of self-averaging]], we arrived to the conclusion that we do not need to evaluate the free energy per disordered coupling, but the mean value per spin:

$$\begin{aligned} \overline{f}_J = & -\frac{1}{N\beta} \overline{\ln Z_J} =  -\frac{1}{N\beta}\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\ln Z_J = \\ & = -\frac{1}{N\beta}\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\ln \left( \sum_{\bar{S}} e^{\beta \sum_{i<j} J_{ij}S_iS_j} \right) \end{aligned}$$

We need to introduce the replica trick to evaluate this expression.
First we recall:

$$ \ln (z) = \lim_{x\to 0} \frac{z^x-1}{x} $$

>[!info] proof

So that we can rewrite:

$$\overline{f}_J = -\frac{1}{N\beta} \overline{\ln Z_J} = -\frac{1}{N\beta} \overline{\lim_{x \to 0} \frac{Z_J^x-1}{x}} = \lim_{x \to 0} -\frac{1}{N\beta x} (\overline{Z_J^x}-1)$$

Then we set $x \equiv n$ and consider it as an integer.
Now we can try to evaluate $\overline{Z_J^n}$:

$$ \begin{aligned} \overline{Z_J^n} = & \int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})Z^n_J = \int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\left( \sum_{\bar{S}} e^{\beta \sum_{i<j} J_{ij}S_iS_j} \right)^n = \\ =&\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\prod_{\alpha=1}^n\left( \sum_{\bar{S}^{\alpha}} e^{\beta \sum_{i<j} J_{ij}S^{\alpha}_iS^{\alpha}_j} \right) = \\ =& \int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\left( \sum_{\bar{S}^{\alpha}} e^{\beta \sum_{\alpha=1}^n\sum_{i<j} J_{ij}S^{\alpha}_iS^{\alpha}_j} \right) \end{aligned}$$

If we recall, as we said, that:

$$ P(J_{ij}) = \sqrt{\frac{N}{2 \pi \delta ^2}}e^{-\frac{N}{2\delta^2}(J_{ij})^2} $$

We can explicitly evaluate:

$$\begin{aligned}\overline{Z_J^n} \propto & \int_{\mathbb{R}} \prod_{i<j}dJ_{ij}e^{-\frac{N}{2\delta^2}(J_{ij})^2}\left( \sum_{\bar{S}^{\alpha}} e^{\beta \sum_{\alpha=1}^n\sum_{i<j} J_{ij}S^{\alpha}_iS^{\alpha}_j} \right) = \\ =& \sum_{\bar{S}^{\alpha}}\left(\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}e^{-\frac{N}{2\delta^2}(J_{ij})^2+\beta \sum_{\alpha=1}^n\sum_{i<j} J_{ij}S^{\alpha}_iS^{\alpha}_j} \right) \end{aligned}$$

In parenthesis we have a Gaussian integral , so we can write:

$$ \overline{Z_J^n} \propto  \sum_{\bar{S}^{\alpha}}\left(\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}e^{-\frac{N}{2\delta^2}(J_{ij})^2+{\beta} \sum_{\alpha=1}^n\sum_{i<j} J_{ij}S^{\alpha}_iS^{\alpha}_j} \right) \propto  \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{2N} \sum_{\alpha=1}^n \sum_{\beta=1}^n\sum_{i<j} S^{\alpha}_iS^{\alpha}_jS^{\beta}_iS^{\beta}_j} $$

Now we can make the approximation $\sum_{i<j} \sim \frac{1}{2} \sum_{i,j}$ so we can write more compactly

$$ \overline{Z_J^n}  \propto  \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{4N} \sum_{\alpha,\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2} $$

But if we divide the sum over $\alpha$ and $\beta$ in sum with the same indexes and sum with different indexes:

$$\begin{aligned} \overline{Z_J^n}  &\propto  \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{4N}\left[ \sum_{\alpha,\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2\right]} = \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{4N}\left[ \sum_{\alpha=\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2+ \sum_{\alpha\neq\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2\right]}= \\&= \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{4N}\left[ nN^2+ \sum_{\alpha\neq\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2\right]}= \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{4N}\left[ nN^2+ 2\sum_{\alpha<\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2\right]} \end{aligned} $$

So that we can finally write:

$$ \overline{Z_J^n} \propto e^{\frac{\beta^2n N\delta^2}{4}} \sum_{\bar{S}^{\alpha}}e^{\frac{\beta^2 \delta^2}{2N} \sum_{\alpha<\beta} \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2}= e^{\frac{\beta^2n N\delta^2}{4}} \sum_{\bar{S}^{\alpha}}\prod_{\alpha<\beta}e^{\frac{\beta^2 \delta^2}{2N}  \left(\sum_{i} S^{\alpha}_iS^{\beta}_i\right)^2} $$

We can expand the exponential inside the configuration sum using an [[Zettelkasten/Master's degree/Models of Theoretical Physics/Gaussian integrals|Hubbard-Stratonovich transform]]. We multiply and divide by $\beta^2\delta^2$ and set $b=\beta^2 \delta^2\sum_{i} S^{\alpha}_iS^{\beta}_i$ and $a=\beta^2\delta^2 N$, to obtain:

$$\begin{aligned} \overline{Z_J^n} \propto &  e^{\frac{\beta^2n N\delta^2}{4}} \sum_{\bar{S}^{\alpha}}\prod_{\alpha<\beta} \int_{\mathbb{R}} dq_{\alpha\beta}e^{-\frac{\beta^2\delta^2 N}{2}q_{\alpha\beta}^2+\beta^2 \delta^2q_{\alpha\beta}\sum_{i} S^{\alpha}_iS^{\beta}_i}=\\ =&   e^{\frac{\beta^2n N\delta^2}{4}} \sum_{\bar{S}^{\alpha}}\int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-\frac{\beta^2\delta^2 N}{2}\sum_{\alpha<\beta} q_{\alpha\beta}^2+\beta^2 \delta^2\sum_{\alpha<\beta} q_{\alpha\beta}\sum_{i} S^{\alpha}_iS^{\beta}_i} = \\ = & e^{\frac{\beta^2n N\delta^2}{4}}  \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-\frac{\beta^2\delta^2 N}{2}\sum_{\alpha<\beta} q_{\alpha\beta}^2} \sum_{\bar{S}^{\alpha}} e^{\beta^2 \delta^2\sum_{\alpha<\beta} q_{\alpha\beta}\sum_{i} S^{\alpha}_iS^{\beta}_i}\end{aligned}$$

>[!info] physical significance of $q_{\alpha\beta}$
As we did in the previous models, if we minimize the exponential we obtain the physical significance of the $q_{\alpha\beta}$ parameter:
$$q_{\alpha\beta} = \frac{1}{N} \sum_{i} S^{\alpha}_iS^{\beta}_i $$
Which is called overlap matrix

Now we can evaluate the configuration sum
$$\begin{aligned}\sum_{\bar{S}^{\alpha}} e^{\beta^2 \delta^2\sum_{\alpha<\beta} q_{\alpha\beta}\sum_{i} S^{\alpha}_iS^{\beta}_i} = &\prod_{i}\sum_{\bar{S}^{\alpha}} e^{\beta^2 \delta^2\sum_{\alpha<\beta} q_{\alpha\beta} S^{\alpha}_iS^{\beta}_i}= \left[ \sum_{\bar{S}^{\alpha}} e^{\beta^2 \delta^2\sum_{\alpha<\beta} q_{\alpha\beta} S^{\alpha}_iS^{\beta}_i} \right]^N = \\ = & \left[ \sum_{\bar{S}^{\alpha}} e^{L(q_{\alpha\beta})} \right]^N =\left[ \text{Tr}(e^{L(q_{\alpha\beta})}) \right]^N = e^{N\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))} \end{aligned} $$

We can write so in the end

$$\begin{aligned} \overline{Z_J^n} & \propto  e^{\frac{\beta^2n N\delta^2}{4}}  \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-\frac{\beta^2\delta^2 N}{2}\sum_{\alpha<\beta} q_{\alpha\beta}^2+N\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))} = \\ & = \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{\frac{\beta^2n N\delta^2}{4}-\frac{\beta^2\delta^2 N}{2}\sum_{\alpha<\beta} q_{\alpha\beta}^2+N\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))} = \\ &= \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-Nn\left(-\frac{\beta^2\delta^2}{4}+\frac{\beta^2\delta^2 }{2n}\sum_{\alpha<\beta} q_{\alpha\beta}^2-\frac{1}{n}\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))\right)}\end{aligned}$$

So that one can define in the end:

$$A(q_{\alpha\beta}) = \underbrace{-\frac{\beta^2\delta^2}{4}+\frac{\beta^2\delta^2 }{2n}\sum_{\alpha<\beta} q_{\alpha\beta}^2}_{\text{energetic part}}-\underbrace{\frac{1}{n}\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))}_{\text{entropic part}}$$
