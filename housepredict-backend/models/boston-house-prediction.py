#!/usr/bin/env python
# coding: utf-8

# In[14]:



import pandas as pd
import numpy as np
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_boston
from sklearn.metrics import classification_report

boston = load_boston()


# In[16]:


df_x = pd.DataFrame(boston.data, columns=boston.feature_names)
df_y = pd.DataFrame(boston.target)


# In[19]:


test_row = [0.00878, 25.0, 4.6, 0.0, 0.752, 7.858, 90.5, 7.1032, 3.0, 250.0, 20.8, 382.90, 10.17]


# In[7]:


reg = linear_model.LinearRegression()


# In[8]:


x_train, x_test, y_train, y_test = train_test_split(df_x, df_y, test_size = 0.33, random_state = 42)


# In[9]:


reg.fit(x_train, y_train)


# In[10]:


print(reg.coef_)


# In[20]:


y_pred = reg.predict(x_test)


# In[12]:


print(np.mean((y_pred - y_test)**2))


# In[29]:


test_row = np.array([[0.00878, 25.0, 4.6, 0.0, 0.752, 7.858, 90.5, 7.1032, 3.0, 250.0, 20.8, 382.90, 10.17]])
test_frame = pd.DataFrame(data = test_row, index = ["row1"], columns = boston.feature_names)


# In[31]:


sample_pred = reg.predict(test_frame)
sample_pred


# In[ ]:




