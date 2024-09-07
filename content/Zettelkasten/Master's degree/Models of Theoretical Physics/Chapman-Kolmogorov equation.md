We begin by considering the probability:

$$\mathbb{P}(m,t;m',t'|m_0,t_0)$$

And to sum over $m'$. This has the effect of a marginalization, i.e. of reducing the joint conditional probability to a simple conditional probability: 

$$\sum_{m'\in E}\mathbb{P}(m,t;m',t'|m_0,t_0)=\mathbb{P}(m,t|m_0,t_0)$$

We notice that marginalization is a fancy way to invoke the [[Law of total probability]].
Now we use the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Markov's process|Markov hypothesis]], that implies that:

$$\mathbb{P}(m,t;m',t'|m_0,t_0)=  \mathbb{P}(m,t|m't')\mathbb{P}(m't'|m_0t_0)$$

So that we obtain in the end

>[!info] **Chapman-Kolmogorov equation**
>$$\mathbb{P}(m\,t|m_0t_0) =\sum_{m' \in E} \mathbb{P}(m,t|m't')\mathbb{P}(m't'|m_0t_0) \qquad t_0<t'<t$$

Notice that this is a non-linear equation, and is quite difficult to solve.