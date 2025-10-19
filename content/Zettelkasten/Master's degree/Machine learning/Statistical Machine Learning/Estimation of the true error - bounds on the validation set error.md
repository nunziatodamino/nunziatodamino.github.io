If we have a validation set containing $m_V$ samples drawn independently by a distribution $D$, then then the following theorem holds:

>[!info] **True error estimation for a given hypothesis using a validation set**
>Let $h$ be some predictor and assume that the loss function is in $[0, 1]$. Then, given the choice of a validation set $V = (z_i)_{i=1}^{m_V} \sim D^{m_V}$,  for every $\delta \in (0, 1)$ it holds:
>
>$$ \Pr\left[|L_D(h) - L_V(h)| \leq \sqrt{\frac{\log(\frac{2}{\delta})}{2m_V}}\right] \geq 1-\delta $$
>
>Equivalent in spirit to the Hoeffding's inequality.

Note that this inequality is looser than the one we saw till now, as is valid not for the entire hypothesis class but for the singleton $\{h\}$.
Note also that there are no additional hypothesis on the type of hypothesis class (can be either finite or infinite) or the algorithm or whatsoever.

This result can be extended to a finite hypothesis class made of singletons $H = \cup_{n=1}^N \{h_n\}$ 

>[!info] **True error estimation for an hypothesis selection using a validation set**
>Let $H = \cup_{n=1}^N \{h_n\}$  be an hypothesis class and assume that the loss function is in $[0, 1]$. Then, given the choice of a validation set $V = (z_i)_{i=1}^{m_V} \sim D^{m_V}$,  for every $\delta \in (0, 1)$ it holds:
>
>$$ \Pr\left[\forall h \in H : |L_D(h) - L_V(h)| \leq \sqrt{\frac{\log(\frac{2|H|}{\delta})}{2m_V}}\right] \geq 1-\delta $$

The idea is then the following: I start with a finite set of subclasses $H' = \cup_n H_n$ where each subclasses can be anything. 
For each subclass i derive the "best" hypothesis on a training set using, say, the ERM rule. 
I then collect all these hypotheses in $H = \cup_{n=1}^N \{h_n\}$.
Then is **guaranteed** that, for a given confidence $\delta$, if the number of this hypotheses is low (i.e. the initial subclasses are few) the approximation between the true risk and the validation risk (the empirical risk on the validation set V) is tighter than the one in which i have many hypotheses.