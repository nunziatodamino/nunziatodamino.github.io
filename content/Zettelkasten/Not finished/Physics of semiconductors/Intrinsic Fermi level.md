It is possible, in the case of the intrinsic semiconductor, to have an analytical expression for the Fermi level, starting from the general expression derived in  [[Zettelkasten/Not finished/Physics of semiconductors/Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band|Electrons and holes densities evaluation in a 3D homogeneous semiconductor using the non-degenerate hypothesis for a non degenerate band]] :

$$ n = N_c e^{\frac{E_C-E_F}{k_bT}} $$

And the [[Zettelkasten/Not finished/Physics of semiconductors/Law of mass action for semiconductors|intrinsic semiconductor hypothesis]] made in the law of mass action:

$$ n = \sqrt{N_cN_v} e^{-\frac{E_c-E_v}{2k_BT}}$$

Putting the 2 together we obtain:

$$ 
\begin{aligned}
N_c e^{-\frac{E_C-E_F}{k_BT}} = \sqrt{N_cN_v} e^{-\frac{E_c-E_v}{2k_BT}} \\
\ln\left(\frac{N_c}{N_v}\right)  =  -\frac{E_C-E_v}{k_BT}+2\frac{E_C-E_F}{k_BT} \\
k_BT\ln\left(\frac{N_c}{N_v}\right)  =  -E_C+E_v+2E_C-2E_F \\
E_F = \frac{E_c+E_v}{2} - \frac{k_BT}{2}\ln\left(\frac{N_c}{N_v}\right) \\
E_F = \frac{E_c+E_v}{2} + \frac{k_BT}{2}\ln\left(\frac{N_v}{N_c}\right)
\end{aligned}
$$

Giving that $k_BT$ provides just a small correction, the main thing derived here is that the Fermi level in an intrinsic semiconductor is roughly at the middle of the 2 bands in terms of energy.
We now analyze the shift contribution.
Say $N_c > N_v$, this means that we have more electrons than holes, so the Fermi level shift towards the holes to maintain the balance in the DOS to maintain the charge neutrality $n=p$:

![[Images/Intrinsic Fermi level.png|400]]
