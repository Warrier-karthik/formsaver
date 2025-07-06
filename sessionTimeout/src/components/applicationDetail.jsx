export function ApplicationDetails({ formData, setformData }) {
  // RTO offices mapping by state
  const rtoOfficesByState = {
    "Andhra Pradesh": [
      "AP01 - Anantapur",
      "AP02 - Chittoor",
      "AP03 - East Godavari",
      "AP04 - Guntur",
      "AP05 - Krishna",
      "AP06 - Kurnool",
      "AP07 - Prakasam",
      "AP08 - Srikakulam",
      "AP09 - Visakhapatnam",
      "AP10 - Vizianagaram",
      "AP11 - West Godavari",
      "AP12 - YSR Kadapa"
    ],
    "Arunachal Pradesh": [
      "AR01 - Itanagar",
      "AR02 - Naharlagun",
      "AR03 - Pasighat",
      "AR04 - Tezu",
      "AR05 - Ziro"
    ],
    "Assam": [
      "AS01 - Guwahati",
      "AS02 - Dibrugarh",
      "AS03 - Jorhat",
      "AS04 - Silchar",
      "AS05 - Tezpur",
      "AS06 - Nagaon",
      "AS07 - Tinsukia",
      "AS08 - Goalpara",
      "AS09 - Barpeta",
      "AS10 - Dhubri"
    ],
    "Bihar": [
      "BR01 - Patna",
      "BR02 - Gaya",
      "BR03 - Bhagalpur",
      "BR04 - Muzaffarpur",
      "BR05 - Darbhanga",
      "BR06 - Purnia",
      "BR07 - Arrah",
      "BR08 - Motihari",
      "BR09 - Chhapra",
      "BR10 - Siwan"
    ],
    "Chhattisgarh": [
      "CG01 - Raipur",
      "CG02 - Bilaspur",
      "CG03 - Durg",
      "CG04 - Rajnandgaon",
      "CG05 - Jagdalpur",
      "CG06 - Ambikapur",
      "CG07 - Korba",
      "CG08 - Raigarh"
    ],
    "Goa": [
      "GA01 - Panaji",
      "GA02 - Margao",
      "GA03 - Mapusa",
      "GA04 - Ponda"
    ],
    "Gujarat": [
      "GJ01 - Ahmedabad",
      "GJ02 - Surat",
      "GJ03 - Vadodara",
      "GJ04 - Rajkot",
      "GJ05 - Bhavnagar",
      "GJ06 - Jamnagar",
      "GJ07 - Junagadh",
      "GJ08 - Anand",
      "GJ09 - Bharuch",
      "GJ10 - Gandhinagar"
    ],
    "Haryana": [
      "HR01 - Gurgaon",
      "HR02 - Faridabad",
      "HR03 - Ambala",
      "HR04 - Karnal",
      "HR05 - Hisar",
      "HR06 - Rohtak",
      "HR07 - Panipat",
      "HR08 - Sonipat",
      "HR09 - Yamunanagar",
      "HR10 - Rewari"
    ],
    "Himachal Pradesh": [
      "HP01 - Shimla",
      "HP02 - Kangra",
      "HP03 - Mandi",
      "HP04 - Solan",
      "HP05 - Kullu",
      "HP06 - Una",
      "HP07 - Hamirpur",
      "HP08 - Chamba"
    ],
    "Jharkhand": [
      "JH01 - Ranchi",
      "JH02 - Jamshedpur",
      "JH03 - Dhanbad",
      "JH04 - Bokaro",
      "JH05 - Hazaribagh",
      "JH06 - Deoghar",
      "JH07 - Dumka",
      "JH08 - Giridih"
    ],
    "Karnataka": [
      "KA01 - Bangalore",
      "KA02 - Mysore",
      "KA03 - Mangalore",
      "KA04 - Belgaum",
      "KA05 - Hubli",
      "KA06 - Gulbarga",
      "KA07 - Davangere",
      "KA08 - Bellary",
      "KA09 - Bijapur",
      "KA10 - Shimoga"
    ],
    "Kerala": [
      "KL01 - Thiruvananthapuram",
      "KL02 - Kollam",
      "KL03 - Pathanamthitta",
      "KL04 - Alappuzha",
      "KL05 - Kottayam",
      "KL06 - Idukki",
      "KL07 - Ernakulam",
      "KL08 - Thrissur",
      "KL09 - Palakkad",
      "KL10 - Malappuram",
      "KL11 - Kozhikode",
      "KL12 - Wayanad",
      "KL13 - Kannur",
      "KL14 - Kasaragod",
      "KL15 - Attingal",
      "KL16 - Adoor",
      "KL17 - Muvattupuzha",
      "KL18 - Vadakara",
      "KL19 - Parassala",
      "KL20 - Neyyattinkara",
      "KL21 - Nedumangad",
      "KL22 - Kazhakkoottam",
      "KL23 - Karunagappally",
      "KL24 - Kottarakkara",
      "KL25 - Adoor",
      "KL26 - Punalur",
      "KL27 - Thiruvalla",
      "KL28 - Mallappally",
      "KL29 - Kayamkulam",
      "KL30 - Chengannur"
    ],
    "Madhya Pradesh": [
      "MP01 - Bhopal",
      "MP02 - Indore",
      "MP03 - Jabalpur",
      "MP04 - Gwalior",
      "MP05 - Ujjain",
      "MP06 - Sagar",
      "MP07 - Rewa",
      "MP08 - Satna",
      "MP09 - Ratlam",
      "MP10 - Khandwa"
    ],
    "Maharashtra": [
      "MH01 - Mumbai",
      "MH02 - Pune",
      "MH03 - Nagpur",
      "MH04 - Thane",
      "MH05 - Nashik",
      "MH06 - Aurangabad",
      "MH07 - Solapur",
      "MH08 - Kolhapur",
      "MH09 - Amravati",
      "MH10 - Jalgaon"
    ],
    "Manipur": [
      "MN01 - Imphal",
      "MN02 - Thoubal",
      "MN03 - Bishnupur",
      "MN04 - Churachandpur"
    ],
    "Meghalaya": [
      "ML01 - Shillong",
      "ML02 - Tura",
      "ML03 - Jowai",
      "ML04 - Nongstoin"
    ],
    "Mizoram": [
      "MZ01 - Aizawl",
      "MZ02 - Lunglei",
      "MZ03 - Champhai",
      "MZ04 - Kolasib"
    ],
    "Nagaland": [
      "NL01 - Kohima",
      "NL02 - Dimapur",
      "NL03 - Mokokchung",
      "NL04 - Tuensang"
    ],
    "Odisha": [
      "OD01 - Bhubaneswar",
      "OD02 - Cuttack",
      "OD03 - Rourkela",
      "OD04 - Berhampur",
      "OD05 - Sambalpur",
      "OD06 - Balasore",
      "OD07 - Baripada",
      "OD08 - Angul",
      "OD09 - Jajpur",
      "OD10 - Bhadrak"
    ],
    "Punjab": [
      "PB01 - Amritsar",
      "PB02 - Ludhiana",
      "PB03 - Jalandhar",
      "PB04 - Patiala",
      "PB05 - Bathinda",
      "PB06 - Hoshiarpur",
      "PB07 - Ferozepur",
      "PB08 - Gurdaspur",
      "PB09 - Sangrur",
      "PB10 - Faridkot"
    ],
    "Rajasthan": [
      "RJ01 - Jaipur",
      "RJ02 - Jodhpur",
      "RJ03 - Kota",
      "RJ04 - Bikaner",
      "RJ05 - Ajmer",
      "RJ06 - Udaipur",
      "RJ07 - Bhilwara",
      "RJ08 - Alwar",
      "RJ09 - Sri Ganganagar",
      "RJ10 - Sikar"
    ],
    "Sikkim": [
      "SK01 - Gangtok",
      "SK02 - Namchi",
      "SK03 - Gyalshing",
      "SK04 - Mangan"
    ],
    "Tamil Nadu": [
      "TN01 - Chennai",
      "TN02 - Coimbatore",
      "TN03 - Madurai",
      "TN04 - Salem",
      "TN05 - Tiruchirappalli",
      "TN06 - Vellore",
      "TN07 - Erode",
      "TN08 - Tiruppur",
      "TN09 - Thanjavur",
      "TN10 - Virudhunagar"
    ],
    "Telangana": [
      "TS01 - Hyderabad",
      "TS02 - Warangal",
      "TS03 - Karimnagar",
      "TS04 - Nizamabad",
      "TS05 - Adilabad",
      "TS06 - Khammam",
      "TS07 - Nalgonda",
      "TS08 - Mahbubnagar",
      "TS09 - Medak",
      "TS10 - Rangareddy"
    ],
    "Tripura": [
      "TR01 - Agartala",
      "TR02 - Khowai",
      "TR03 - Udaipur",
      "TR04 - Dharmanagar"
    ],
    "Uttar Pradesh": [
      "UP01 - Lucknow",
      "UP02 - Kanpur",
      "UP03 - Varanasi",
      "UP04 - Agra",
      "UP05 - Meerut",
      "UP06 - Allahabad",
      "UP07 - Bareilly",
      "UP08 - Ghaziabad",
      "UP09 - Noida",
      "UP10 - Gorakhpur"
    ],
    "Uttarakhand": [
      "UK01 - Dehradun",
      "UK02 - Haridwar",
      "UK03 - Nainital",
      "UK04 - Udham Singh Nagar",
      "UK05 - Pauri Garhwal",
      "UK06 - Tehri Garhwal",
      "UK07 - Pithoragarh",
      "UK08 - Almora",
      "UK09 - Bageshwar",
      "UK10 - Chamoli",
      "UK11 - Rudraprayag",
      "UK12 - Uttarkashi",
      "UK13 - Champawat"
    ],
    "West Bengal": [
      "WB01 - Kolkata",
      "WB02 - Howrah",
      "WB03 - Hooghly",
      "WB04 - North 24 Parganas",
      "WB05 - South 24 Parganas",
      "WB06 - Nadia",
      "WB07 - Murshidabad",
      "WB08 - Malda",
      "WB09 - Burdwan",
      "WB10 - Birbhum"
    ],
    "Andaman and Nicobar Islands": [
      "AN01 - Port Blair"
    ],
    "Chandigarh": [
      "CH01 - Chandigarh"
    ],
    "Dadra and Nagar Haveli and Daman and Diu": [
      "DN01 - Silvassa",
      "DN02 - Daman",
      "DN03 - Diu"
    ],
    "Delhi": [
      "DL01 - New Delhi",
      "DL02 - Old Delhi",
      "DL03 - Dwarka",
      "DL04 - Rohini",
      "DL05 - Lajpat Nagar",
      "DL06 - Janakpuri",
      "DL07 - Vasant Vihar",
      "DL08 - Sarita Vihar",
      "DL09 - Mayur Vihar",
      "DL10 - Yamuna Vihar"
    ],
    "Lakshadweep": [
      "LD01 - Kavaratti"
    ],
    "Puducherry": [
      "PY01 - Puducherry",
      "PY02 - Karaikal",
      "PY03 - Mahe",
      "PY04 - Yanam"
    ]
  };

  const handleInputChange = (field, value) => {
    setformData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get RTO offices for selected state
  const getRtoOfficesForState = (state) => {
    return rtoOfficesByState[state] || [];
  };

  // Clear RTO office when state changes
  const handleStateChange = (value) => {
    handleInputChange('stateSelection', value);
    // Clear RTO office selection when state changes
    handleInputChange('rtoOffice', '');
  };

  return (
    <>
      <div class="card-header bg-primary text-white section-title">Application Info</div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">State *</label>
          <select 
            class="form-select" 
            required
            value={formData.stateSelection}
            onChange={e => handleStateChange(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">RTO Office *</label>
          <select 
            class="form-select" 
            required
            value={formData.rtoOffice}
            onChange={e => handleInputChange('rtoOffice', e.target.value)}
            disabled={!formData.stateSelection}
          >
            <option value="">
              {formData.stateSelection ? "Select RTO Office" : "Please select a state first"}
            </option>
            {getRtoOfficesForState(formData.stateSelection).map((office, index) => (
              <option key={index} value={office}>
                {office}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
