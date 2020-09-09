const employeeRegions = [
	[{
		name: 'Mike',
		age: 23,
		title: 'engineer',
		remote: false,
	  },
	  {
		name: 'Liz',
		age: 20,
		title: 'engineer',
		remote: true,
	  },
	  {
		name: 'Chris',
		age: 102,
		title: 'president',
		remote: true,
	  },
	  {
		name: 'Chuloo',
		age: 27,
		title: 'manager',
		remote: false,
	  },
	],
	[{
		name: 'Michelle',
		age: 65,
		title: 'engineer',
		remote: true,
	  },
	  {
		name: 'Sam',
		age: 25,
		title: 'manager',
		remote: false,
	  },
	  {
		name: 'Ivy',
		age: 26,
		title: 'engineer',
		remote: false,
	  },
	  {
		name: 'Nick',
		age: 32,
		title: 'engineer',
		remote: true,
	  },
	]
  ];

  /**
   * interface Employee {
   *   name: string;
   *   age: number;
   *   title: string;
   *   remote: boolean;
   *   region?: string;
   * }
   *
   * * Return an array of employees.
   * * Do not include any employees who are remote.
   * * Add a field "region" to each employee object. The region value should be
   * ** the string "Region " together with the index of the group plus one
   * ** "Region 1" (for index 0).
   *
   * @param {Employee[][]} employeeRegions
   * @returns {Employee[]}
   */
  function transformGroups(employeeRegions) {
	let employees = []
	employeeRegions.forEach((employeeRegion, indexOfGroup) => {
	  employeeRegion.forEach(employee => {
		// Do not include any employees who are remote.
		if (!employee.remote) {
		  employees.push({
			...employee,
			// Add a field "region" to each employee object. The region value should be
			// the string "Region " together with the index of the group plus one
			region: `Region ${indexOfGroup + 1}`
		  })
		}
	  })
	})
	return employees
  }

//  run it in console to test output
console.log(transformGroups(employeeRegions))
