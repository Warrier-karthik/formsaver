from pydantic import BaseModel
from typing import Dict

class FormData(BaseModel):
    url: str
    data: Dict[str, str]

class UserAuth(BaseModel):
    username: str
    password: str

class ExtensionFormData(BaseModel):
    user_id: str
    url: str
    data: Dict[str, str]

