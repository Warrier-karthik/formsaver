export function PersonalDetails({ formData, setformData }) {
  const handleInputChange = (field, value) => {
    setformData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div class="card-header bg-primary text-white section-title">
        Personal Details
      </div>
      <div class="card-body">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Name of Applicant *</label>
            <input 
              type="text" 
              class="form-control" 
              value={formData.nameOfApplicant} 
              onChange={e => handleInputChange('nameOfApplicant', e.target.value)} 
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Relation *</label>
            <select 
              class="form-select" 
              required
              value={formData.relation}
              onChange={e => handleInputChange('relation', e.target.value)}
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Mother">Mother</option>
              <option value="Wife">Wife</option>
              <option value="Son">Son</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Relative Name *</label>
            <input 
              type="text" 
              class="form-control" 
              required 
              value={formData.relationName}
              onChange={e => handleInputChange('relationName', e.target.value)}
            />
          </div>
          <div class="form-group full-width">
            <label class="form-label">Full Name as per Records *</label>
            <input 
              type="text" 
              class="form-control" 
              required 
              value={formData.fullName}
              onChange={e => handleInputChange('fullName', e.target.value)}
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Gender *</label>
            <div class="gender-options">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={e => handleInputChange('gender', e.target.value)}
                />
                <label class="form-check-label">Male</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={e => handleInputChange('gender', e.target.value)}
                />
                <label class="form-check-label">Female</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="Transgender"
                  checked={formData.gender === "Transgender"}
                  onChange={e => handleInputChange('gender', e.target.value)}
                />
                <label class="form-check-label">Transgender</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Date of Birth *</label>
            <input 
              type="date" 
              class="form-control" 
              required 
              value={formData.dob}
              onChange={e => handleInputChange('dob', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Country of Birth *</label>
            <input 
              type="text" 
              class="form-control" 
              required 
              value={formData.countryOfBirth}
              onChange={e => handleInputChange('countryOfBirth', e.target.value)}
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Place of Birth</label>
            <input 
              type="text" 
              class="form-control" 
              value={formData.placeOfBirth}
              onChange={e => handleInputChange('placeOfBirth', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Qualification *</label>
            <select 
              class="form-select" 
              required
              value={formData.qualification}
              onChange={e => handleInputChange('qualification', e.target.value)}
            >
              <option value="">Select</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Blood Group</label>
            <select 
              class="form-select"
              value={formData.bloodGroup}
              onChange={e => handleInputChange('bloodGroup', e.target.value)}
            >
              <option value="">Unknown</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
            </select>
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Landline Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="EX:04023659856"
              value={formData.landlineNumber}
              onChange={e => handleInputChange('landlineNumber', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Mobile Number *</label>
            <input 
              type="tel" 
              class="form-control" 
              required 
              value={formData.mobileNumber}
              onChange={e => handleInputChange('mobileNumber', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Alternate Mobile Number</label>
            <input 
              type="tel" 
              class="form-control" 
              value={formData.altMobileNumber}
              onChange={e => handleInputChange('altMobileNumber', e.target.value)}
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Email ID</label>
            <input 
              type="email" 
              class="form-control" 
              value={formData.email}
              onChange={e => handleInputChange('email', e.target.value)}
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Identification Mark 1</label>
            <input
              type="text"
              class="form-control"
              placeholder="MOLE ON RIGHT HAND"
              value={formData.identificationMark1}
              onChange={e => handleInputChange('identificationMark1', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Identification Mark 2</label>
            <input
              type="text"
              class="form-control"
              placeholder="SCAR ON HEAD"
              value={formData.identificationMark2}
              onChange={e => handleInputChange('identificationMark2', e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}